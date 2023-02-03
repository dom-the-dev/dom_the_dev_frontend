import React, {FC, PropsWithChildren} from 'react';
import Head from "next/head";
import Link from "next/link";
import Menu from './Menu';

const Layout: FC<PropsWithChildren<{ title: string }>> = ({title, children}) => {
  return (
    <div className="m-6 md:m-12 relative">
      <Head>
        <title>{title} - Dom the dev</title>
        <meta name="description" content="Personal portfolio of dom the dev"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="absolute right-0 top-0">
        <Menu/>
      </div>
      <Link href="/">
        <a>
          <span className={"text-2xl"}>Dom the dev</span>
        </a>
      </Link>
      <main className="fixed bottom-6 md:bottom-12  w-4/6">
        {children}
      </main>

      <div className="fixed bottom-6 md:bottom-12 right-6 md:right-12">
        <Link href="/imprint">
          <a>Imprint</a>
        </Link>
      </div>
    </div>
  );
};

export default Layout;
