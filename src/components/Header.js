import React from 'react';
import { Link } from 'react-router-dom';

// styling imports
import { Flex, Box, Text, Image } from 'rebass';

// components
import ShipperHeader from './ShipperHeader';
import NPHeader from './NPHeader';

// files
import shipForCharityIcon from '../images/shipForCharity.png';
import shipperIcon from '../images/shipper1.png';
import nonprofitIcon from '../images/ribbon.png';


function Header(props) {

  let userType = sessionStorage.getItem('user_type')

  const headerLinkStyles = {
    paddingTop: '10px',
    color: '#ffffff',
    fontFamily: 'Open Sans',
    fontSize: '20px',
    fontWeight: 'bold',
    textDecoration: 'none'
  }

  const iconStyles = {
    height: '55px',
    width: '55px',
    marginTop: '-4px',
    marginRight: '15px',
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderRadius: '8px'
  }

  return (
    <header>
      <Flex sx={{
              height: '70px',
              padding: '12px 0 0 0',
              bg: 'rgb(0, 51, 128)',
              color: '#ffffff',
              fontFamily: 'Open Sans',
              fontSize: '32px',
              fontWeight: 'bold',
              justifyContent: 'center'
              }}>

        <Flex width='900px' justifyContent='space-between'>
          <Text>Ship For Charity</Text>

          { (userType === 'shipper') && <ShipperHeader /> } 
          { (userType === 'np') &&  <NPHeader /> }

          {/* <Link style={headerLinkStyles}>\__||||__/</Link> */}

          <Box styles={iconStyles}>
            { (userType === null) && (<div>
                                        <Image src={shipperIcon} style={iconStyles} /> 
                                        <Image src={nonprofitIcon} style={iconStyles} />
                                      </div>) }
            { (userType === 'shipper') && <Image src={shipperIcon} style={iconStyles} /> } 
            { (userType === 'np') &&  <Image src={nonprofitIcon} style={iconStyles} /> }
          </Box>

        </Flex>

      </Flex>
    </header>
  )
};
export default Header;