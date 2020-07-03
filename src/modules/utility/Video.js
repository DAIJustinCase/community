//** @jsx jsx */
import React from 'react';
import {Box, jsx} from 'theme-ui'

//NOTE(Rejon): This is to support playlists for youtube embed specifically!
//This video component is a basic recreation of what the remark-gatsby-video plugin creates. 
//We inline the allowances and styles as needed, but this can be used for anything that can be embed into an iframe. 
const Video = ({src}) => (
	<Box sx={{pb: '50%', position: 'relative', height: 0, overflow: 'hidden'}}>
		<Box>
			<iframe src={src} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen sx={{border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
		</Box>
	</Box>
)

export default Video; 