import Link from "next/link";
import { Header } from "@/components/Header";

const candidates = [
  {
    id: "anies-muhaimin",
    fullnamePC: "Anies Baswedan",
    fullnameVPC: "Muhaimin Iskandar",
    namePC: "Anies",
    nameVPC: "Cak Imin",
  },
  {
    id: "prabowo-gibran",
    fullnamePC: "Prabowo Subianto",
    fullnameVPC: "Gibran Rakabuming",
    namePC: "Prabowo",
    nameVPC: "Gibran",
  },
  {
    id: "ganjar-mahfud",
    fullnamePC: "Ganjar Pranowo",
    fullnameVPC: "Mahfud MD",
    namePC: "Ganjar",
    nameVPC: "Mahfud",
  },
];

const IndexPage: React.FC = () => {
  return (
    <>
      <Header />

      <div className="p-8 md:px-40">
        <div className="py-4">
          <p className="text-4xl font-bold">Pilpres 2024</p>
          <p className="text-xl">
            Rangkuman janji kampanye capres dan cawapres. Yuk bantu pantau!
          </p>
        </div>
        <div>
          {candidates?.map((item: any, index: number) => (
            <Link href={`/pilpres/2024/${item.id}`} key={index}>
              <div className="p-4 flex justify-between border border-gray-200 my-4 rounded-xl shadow-sm hover:border-red-400">
                <div>
                  <p className="md:text-lg font-semibold">
                    {item.fullnamePC} & {item.fullnameVPC}
                  </p>
                  <p className="text-md capitalize">
                    Capres & Cawapres Nomor Urut {index + 1}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
