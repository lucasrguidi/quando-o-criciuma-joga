import React from "react";
import { Oval } from "react-loader-spinner";
import apiUrls from "../../api";
import useLogoSrc from "../Hooks/useLogo";

const Tabela = ({ loading, setLoading }) => {
  const apiUrl = apiUrls.tableApiUrl;
  const logoSrc = useLogoSrc();

  const [tableData, setTableData] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    async function getTableData() {
      try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        setTableData(json);
      } catch (error) {
        return;
      } finally {
        setLoading(false);
      }
    }

    getTableData();
  }, []);

  if (loading === true)
    return (
      <div className="h-full flex justify-center items-center">
        <Oval
          color="#FACC15"
          secondaryColor="#FDE047"
          strokeWidth={3}
          height={150}
          width={150}
        />
      </div>
    );
  return (
    <div className="overflow-y-scroll rounded-xl shadow-lg max-lg:w-full">
      <table className="table-auto">
        <thead>
          <tr className="bg-slate-300">
            <th className="p-4 max-lg:p-2 text-left" colSpan={3}>
              BRASILEIRÃO SÉRIE B
            </th>
            <th className="p-4 max-lg:p-2">PG</th>
            <th className="p-4 max-lg:p-2">J</th>
            <th className="p-4 max-lg:p-2">V</th>
            <th className="p-4 max-lg:p-2">E</th>
            <th className="p-4 max-lg:p-2">D</th>
            <th className="p-4 max-lg:p-2">SG</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((pos, index) => (
            <tr
              key={pos.posicao}
              className={index % 2 === 0 ? "bg-slate-100" : "bg-slate-200"}
            >
              <td
                className={`py-2 px-4 max-lg:text-center ${
                  pos.posicao === "1" ||
                  pos.posicao === "2" ||
                  pos.posicao === "3" ||
                  pos.posicao === "4"
                    ? "g4"
                    : pos.posicao === "17" ||
                      pos.posicao === "18" ||
                      pos.posicao === "19" ||
                      pos.posicao === "20"
                    ? "z4"
                    : ""
                }`}
              >
                {pos.posicao}°
              </td>
              <td className="p-2">
                <img
                  className="h-8 w-8 max-lg:max-w-none small-h-table-img"
                  src={logoSrc(pos.time.nome)}
                  referrerPolicy="no-referrer"
                  title={pos.time.nome}
                ></img>
              </td>
              <td className="py-2 px-2 max-lg:p-2">{pos.time.nome}</td>
              <td className="py-2 px-4 max-lg:p-2">{pos.pontos}</td>
              <td className="py-2 px-4 max-lg:p-2">{pos.jogos}</td>
              <td className="py-2 px-4 max-lg:p-2">{pos.vitorias}</td>
              <td className="py-2 px-4 max-lg:p-2">{pos.empates}</td>
              <td className="py-2 px-4 max-lg:p-2">{pos.derrotas}</td>
              <td className="py-2 px-4 max-lg:p-2">{pos.saldo_gols}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
