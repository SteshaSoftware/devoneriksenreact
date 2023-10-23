import { Box } from '@mui/material'
import React from 'react'
import MediaContent from '../components/Media/MediaContents'

const Media = () => {
  return (
    <>

      <div data-aos="fade-down" style={{ width: "100%", marginTop: "0px" }}>
      <Box
        sx={{
      
          display: "flex",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <MediaContent 
        title= 'Chattanooga Daily Refresh'
        subtitle = 'Devon joins the Daily Refresh to talk about Theft of Fire and his inspiration.'
        content= 'http://sinclairstoryline.com/resources/embeds/jw8-embed.html?client=googima&file=https://content.uplynk.com/0bb90d57f47241939f5c956517168bef.m3u8&autostart=false' 
        date = '2023-10-20'
        />
          
      </Box>

      </div>

    </>
  )
}

export default Media