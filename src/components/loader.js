import React from 'react';
import LoaderImage from '../assets/loading.gif';

const Loader = (props) => {
	return (
		<div>
		<img alt="File Loading..." style={{width: 85}}
		src={LoaderImage}
		/>

		</div>
		)
}

export default Loader;
