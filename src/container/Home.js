import React from 'react';

// styling imports
import { Flex, Box, Text, Image } from 'rebass';
import './home.css';

// Link-Header-Route imports
import { Link } from 'react-router-dom';

// file imports
import shipper from '../images/shipper1.png';
import nonprofit from '../images/ribbon.png';


function Home() {

    const boxStyles = {
        width: '300px',
        height: '300px',
        marginTop: '0px',
        backgroundColor: '#eeeeee',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '8px',
        borderColor: '#dddddd',
        boxShadow: '2px 2px 7px -1px rgb(120, 120, 120)',
    };
  
    const textStyles = {
        paddingTop: '5px',
        color: 'rgb(0, 68, 170)',
        fontSize: '35px',
        fontWeight: 'bold'
    };

    return ( 

          <Flex sx={{
              flexWrap: 'row',
              width: '100%',
              paddingTop: '10%',
              // backgroundColor: '#ffffff',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center'}}>

            <Box className='waves' height='263px' width='50%' />
            
            <Link to='/shipperLogin' style={{ textDecoration: 'none' }}>
              <Box className='box-button' style={boxStyles}>
                <Image src={shipper} height='200px' marginTop='30px' />
                <Text style={textStyles}>Shipper Login</Text>
              </Box>
            </Link>

            <Box minWidth='50px' />

            <Link to='/npLogin' style={{ textDecoration: 'none' }}>
              <Box className='box-button' style={boxStyles}>
                <Image src={nonprofit} height='200px' marginTop='30px' />
                <Text style={textStyles}>Nonprofit Login</Text>
              </Box>
            </Link>

            <Box className='waves' height='263px' width='50%' />

          </Flex>
    )
};
export default Home;