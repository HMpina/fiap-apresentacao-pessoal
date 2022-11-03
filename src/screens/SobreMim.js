import React from "react";
import useAxios from "axios-hooks";
import { HeadingOne } from "../common-components/HeadingOne/HeadingOne";
import { InfoPessoal } from "../components/InfoPessoal/InfoPessoal";
import { InfoPessoalLoader } from "../components/InfoPessoal/InfoPessoalLoader";
import { Button } from "../common-components/Button/Button";
import { Card } from "../common-components/Card/Card";

export function SobreMim() {
  const [search] = React.useState({
    cepTrabalho: 13214662,
  });

  const [
    { data: cepBuscado, loading: isLoadingCep },
    searchCep,
  ] = useAxios(`/${search.cepTrabalho}/json/`, { manual: false });

  React.useEffect(() => {
    searchCep();
  }, []);

  return (
    <>
      <HeadingOne>Informações Pessoais</HeadingOne>

      <Button>Casa</Button>
      <Button onClick={searchCep}>Trabalho</Button>

      {!isLoadingCep && cepBuscado && cepBuscado.error ? (
        <div>Deu ruim</div>
      ) : (
        <Card>
          {isLoadingCep && (
          <>
          <InfoPessoalLoader />
        </>
        )}
        {!isLoadingCep &&
            cepBuscado &&
            cepBuscado.results.map((cep) => (
              <InfoPessoal
                cidade={cep.cidade}
                estado={cep.uf}
                logradouro={cep.logradouro}
                bairro={cep.bairro}
                />
            ))}
                </Card>
        
      )}
    </>
  );
}
