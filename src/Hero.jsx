import ClaiHero from './assets/clai-hero.jpg'

function Hero() {	
	return (
		<>
			<div className='full-vh d-flex align-items-center' id="about">
				<div className='container'>
					<div className="d-flex justify-content-center gap-3 align-items-center">
						<img src={ClaiHero} height={150} alt="clai picture" id="clai-hero" />
						<div className="d-flex flex-column justify-content-center">
							<h1>clai</h1>
							<p>med tech, leader, dog lover, model</p>
						</div>
					</div>					
				</div>
			</div>
		</>
	)
}

export default Hero;