import React from 'react'
import { Tabs, Tab } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'

const Overview = () => (
  <Card className="my-4">
    <CardContent>
      <h2 className="text-xl font-bold">NTRU Overview</h2>
      <p className="mt-2">Post-quantum cryptography system</p>
      <p className="mt-1">NIST Status: Finalist in NIST PQC standardization effort</p>
    </CardContent>
  </Card>
)

const News = ({ news }) => (
  <div className="space-y-4">
    {news.map((item, index) => (
      <Card key={index}>
        <CardContent>
          <p className="text-sm text-gray-500">{item.date}</p>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm mt-1">{item.description}</p>
          {item.link && <a className="text-blue-600 underline text-sm" href={item.link} target="_blank">Link</a>}
          {item.download_link && <a className="text-blue-600 underline text-sm" href={item.download_link} target="_blank">Download</a>}
        </CardContent>
      </Card>
    ))}
  </div>
)

const Team = ({ team }) => (
  <div className="grid md:grid-cols-2 gap-4">
    {team.map((member, index) => (
      <Card key={index}>
        <CardContent>
          <h3 className="font-bold">{member.name}</h3>
          <p className="text-sm text-gray-700">{member.affiliation}</p>
          {member.personal_url && <a className="text-blue-600 underline text-sm" href={member.personal_url} target="_blank">Profile</a>}
        </CardContent>
      </Card>
    ))}
  </div>
)

const Credits = ({ institutions }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {institutions.map((inst, index) => (
      <Card key={index}>
        <CardContent>
          <img src={inst.logo} alt={inst.name} className="h-16 mx-auto mb-2" />
          <p className="text-center text-sm font-medium">{inst.name}</p>
        </CardContent>
      </Card>
    ))}
  </div>
)

const HomePage = ({ data }) => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">NTRU: Next-generation Cryptography</h1>
      <Tabs defaultValue="overview" className="w-full">
        <Tab value="overview" label="Overview">
          <Overview />
        </Tab>
        <Tab value="news" label="News">
          <News news={data.news} />
        </Tab>
        <Tab value="team" label="Team">
          <Team team={data.team} />
        </Tab>
        <Tab value="credits" label="Credits">
          <Credits institutions={data.credits.institutions} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default HomePage
