import { Menu } from '@/components/Menu/Menu.component'
import styles from './page.module.scss'
import { Wordpress } from '../services/Wordpress.service';

export default function Home() {
  return (
    <>
      <Menu menu={Wordpress.getMenu} />
    </>
  )
}
