import React, { useEffect, useState } from 'react'

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ImgUrl, TokenUrl } from '../Utilities/Urls';
import { ErrorHandler } from '../components/NotificationProvider';
import Header, { Title } from '../components/Header';
import { Carousel } from '@mantine/carousel';
import { Grid } from '@mantine/core';
import { Loadings } from '../components/Loading';



const Dashboard = () => {

  const DropDown = ({ currentMode }) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
      <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
    </div>
  );


  const [point, setPoint] = useState("")
  const [clients, setClients] = useState([])
  const [banner, setBanner] = useState([])
  const [badge, setBadge] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Title("Dashboard")
    TokenUrl().get('/dashboard').then((res) => {
      setPoint(res?.data?.data?.point)
      setLoading(false)
      setBanner(res?.data?.data?.banner['rows'])
      setBadge(res?.data?.data?.badge['rows'])
      setClients(res?.data?.data?.clients['rows'])
    }).catch((err) => {
      ErrorHandler(err)
    })
  }, [])



  return ( loading ? <Loadings/> :
    <div>

      <div className="ml-5 align-center mb-5">


      <div class="flex gap-3 grid-cols-3 p-2 justify-between flex-wrap">
          <div class="w-60 bg-white p-5 rounded-2xl shadow-2xl transtiton-all hover:shadow-none">

            <div class="flex content-center justify-between">
              <div class="left">
                <h3>Total Remaining Points</h3>
                <h1> {point.points}</h1 >
              </div>

            </div>
          </div>
        </div>

        <Grid className='mt-10'>
          <Grid.Col sm={6}>
            {banner.length > 0 ? 
            <><Header title={"Banner"}/>
              <Carousel slideSize="50%" height={300} slideGap="xl" controlsOffset="xs" controlSize={14} loop dragFree withIndicators>
                {
                  banner?.map((i, j) =>
                    <Carousel.Slide key={j}>
                      <Grid>
                        <Grid.Col sm={12}>
                          <img src={`${ImgUrl}${i.image}`} />
                        </Grid.Col>
                      </Grid>
                    </Carousel.Slide>

                  )
                }

              </Carousel></>
              :
              ""}
          </Grid.Col>
          <Grid.Col sm={6}>
            {clients.length > 0 ?
            <> <Header title={"Client"}/>
              <Carousel slideSize="50%" height={300} slideGap="xl" controlsOffset="xs" controlSize={14} loop dragFree withIndicators>
                {
                  clients?.map((i, j) =>
                    <Carousel.Slide key={j}>
                      <img src={`${ImgUrl}${i.image}`} />
                    </Carousel.Slide>

                  )
                }

              </Carousel> </>: ""
            }

          </Grid.Col>
        </Grid>




    
      </div>

    </div>
  )
}

export default Dashboard