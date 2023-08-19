import Footer from '@/components/Footer.js';
import Header from '@/components/Header.js';
import '@/styles/globals.css';
import { GuildContext } from '@/utils/contexts/GuildContext';
import React from 'react';

function App({ Component, pageProps }) {
	const [guild, setGuild] = React.useState();
	const Layout = Component.getLayout
		? Component.getLayout
		: page => (
				<React.Fragment>
					<Header />
					{page}
					<Footer className="grow bottom-0" />
				</React.Fragment>
		  );

	return (
		<GuildContext.Provider value={{ guild, setGuild }}>
			{Layout(<Component {...pageProps} />)}
		</GuildContext.Provider>
	);
}

export default App;
