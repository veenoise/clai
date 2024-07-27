import ClaiSide from './assets/clai-sidepanel.svg'

function Sidepanel() {
	return (
		<>
			<aside className="full-vh d-none d-md-flex flex-column justify-content-center gap-5" id="sidepanel">
				<img src={ClaiSide} width={150} id="sidepanel-picture" alt="picture of clai" />
				<div>
					<h1 className='text-center'>c</h1>
					<h1 className='text-center'>l</h1>
					<h1 className='text-center'>a</h1>
					<h1 className='text-center'>i</h1>
				</div>
			</aside>
		</>	
	)	
}

export default Sidepanel;