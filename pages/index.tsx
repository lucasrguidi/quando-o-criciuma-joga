import { useEffect, useState } from 'react'
import axios from 'axios'
import LastMatches from '../src/ui/Components/LastMatches'
import NextMatch from '../src/ui/Components/NextMatch'
import NextMatches from '../src/ui/Components/NextMatches'
import Selector from '../src/ui/Components/Selector'
import Table from '../src/ui/Components/Table'
import Footer from '../src/ui/Components/Footer'
import Head from 'next/head'
import { TableResponse } from '@/src/ui/Interfaces/table.interface'
import { MatchResponse } from '@/src/ui/Interfaces/matches.interface'

interface ResponseData {
  tableData: TableResponse[] | null
  nextMatchesData: MatchResponse[] | null
  lastMatchesData: MatchResponse[] | null
}

export default function Home() {
  const [statsView, setStatsView] = useState<string>('table')
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<ResponseData | null>(null)

  const apiUrl: string = process.env.NEXT_PUBLIC_API_URL as string

  useEffect(() => {
    async function getData() {
      setLoading(true)
      try {
        const response = await axios.get(apiUrl, { timeout: 10000 })
        setData(response.data)
      } catch (error) {
        console.error('Erro ao buscar os dados:', error)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])

  return (
    <>
      <Head>
        <title>Quando o Criciúma joga?</title>
      </Head>
      <div className="h-screen bg-yellow-400 max-lg:h-fit">
        <div
          className="container mx-auto flex max-lg:flex-col-reverse max-lg:justify-center max-lg:items-center max-lg:gap-12 max-lg:p-4"
          style={{ height: '95%' }}
        >
          <div className="w-1/2 h-full flex flex-col items-center justify-center p-4 max-lg:p-0 max-lg:w-full max-lg:h-full">
            <div className="bg-white h-full gap-4 flex flex-col max-h-[90%] w-full rounded-2xl items-center p-4  max-lg:gap-4 max-lg:w-100 max-lg:h-screen ">
              <Selector
                setStatsView={setStatsView}
                statsView={statsView}
              ></Selector>
              {statsView === 'table' ? (
                <Table loading={loading} data={data?.tableData} />
              ) : null}
              {statsView === 'nextMatches' ? (
                <NextMatches loading={loading} data={data?.nextMatchesData} />
              ) : null}
              {statsView === 'lastMatches' ? (
                <LastMatches loading={loading} data={data?.lastMatchesData} />
              ) : null}
              <span>teste teste</span>
            </div>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center p-4 max-lg:p-0 max-lg:w-full max-lg:h-full ">
            {data?.nextMatchesData && data.nextMatchesData.length > 0 ? (
              <NextMatch loading={loading} data={data.nextMatchesData[0]} />
            ) : (
              <div>Sem partidas previstas</div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
