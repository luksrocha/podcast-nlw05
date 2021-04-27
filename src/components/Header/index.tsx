import React from 'react';
import styles from './styles.module.scss';
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';

// import { Container } from './styles';

export const Header: React.FC = () => {

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  });

  return (
    <header className={styles.headerContainer}>
      <Link href={'/'}>
        <a>
          <img src="/logo.svg" alt="Podcastr" />
        </a>
      </Link>

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </header>
  );

}

