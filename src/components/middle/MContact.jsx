import { BsLinkedin } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import { FaGithub } from 'react-icons/fa'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

function MContact() {
  return (
    <Box>
      <h2 className='contact'>Contact Me</h2>
      <Link
        href='https://www.linkedin.com/in/alisha-barraw/'
        sx={{ paddingLeft: 3 }}
      >
        <BsLinkedin />
        Alisha Barraw
      </Link>{' '}
      <br />
      <Link href='mailto:alisha.barraw@gmail.com' sx={{ paddingLeft: 3 }}>
        <TfiEmail /> Click to Send an Email to me
      </Link>{' '}
      <br />
      <Link href='https://github.com/akb3y' sx={{ paddingLeft: 3 }}>
        <FaGithub /> Check Out My Github
      </Link>
    </Box>
  )
}

export default MContact
