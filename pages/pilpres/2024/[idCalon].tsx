import { GetStaticProps, GetStaticPaths } from "next";
import { getPilpres } from "@/services";
import { useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import Head from "next/head";

interface IdCalonPageProps {
  idCalon: string;
  dataCalon: any;
}

const IdCalonPage: React.FC<IdCalonPageProps> = ({ idCalon, dataCalon }) => {
  useEffect(() => {
    console.log("dataCalon", dataCalon);
  }, []);

  return (
    <>
      <Head>
        <title>Pilpres 2024 - Janji Kampanye {dataCalon.name}</title>
        <meta name="description" content={`Janji Kampanye ${dataCalon.name}`} />
        <meta name="keywords" content={`Janji Kampanye ${dataCalon.name}`} />
        <meta
          property="og:title"
          content={`Janji Kampanye ${dataCalon.name}`}
        />
        <meta
          property="og:description"
          content={`Janji Kampanye ${dataCalon.name}`}
        />
        <meta property="og:image" content={dataCalon.image} />
        <meta
          property="og:url"
          content={`https://janjikampanye.id/pilpres/2024/${idCalon}`}
        />
      </Head>
      <Header />
      <div className="p-8 md:px-40">
        <div className="py-4">
          <p className="text-4xl font-bold">{dataCalon.name}</p>
          <p className="text-xl">
            Calon Presiden Republik Indonesia nomor urut {dataCalon.no}
          </p>
        </div>
        <div>
          {dataCalon?.promises?.map((item: any, index: number) => (
            <div
              className="p-4 flex justify-between border border-gray-200 my-4 rounded-xl shadow-sm"
              key={index}
            >
              <div>
                <p className="md:text-lg font-semibold">{item.title}</p>
                <p className="text-md capitalize">{item.description}</p>
              </div>
              <div>
                <Link target="_blank" href={item.sources[0]}>
                  <p className="text-md text-red-500 hover:text-red-700 hover:font-semibold">
                    Sumber
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IdCalonPage;

export const runtime = "experimental-edge"; // 'nodejs' (default) | 'edge'

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const idCalon = context.params?.idCalon || "";

  const data = await getPilpres();

  if (!data.some((item: any) => item.id === idCalon)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      idCalon,
      dataCalon: data.find((item: any) => item.id === idCalon),
    },
  };
};
