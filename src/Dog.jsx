import Dog1 from './assets/clai-dog-1.jpeg'
import Dog2 from './assets/clai-dog-2.jpeg'
import Dog3 from './assets/clai-dog-3.jpeg'
import Dog4 from './assets/clai-dog-4.jpeg'
import Dog5 from './assets/clai-dog-5.jpeg'
import Dog6 from './assets/clai-dog-6.jpeg'
import Dog7 from './assets/clai-dog-7.jpeg'
import Dog8 from './assets/clai-dog-8.jpeg'
import Dog9 from './assets/clai-dog-9.jpeg'
import Dog10 from './assets/clai-dog-10.jpeg'
import Dog11 from './assets/clai-dog-11.jpeg'
import Dog12 from './assets/clai-dog-12.jpeg'

function Dog() {
	return (
		<>
			<div className="full-vh d-flex align-items-center justify-content-center">
				<div className='d-flex align-items-center scrollable mx-auto gap-2 max-w'>
					<div className='d-flex'>
						<img src={Dog1} alt="dog picture 1" height={286}/>
					</div>
					<div className='d-flex flex-column gap-2'>
						<img src={Dog2} alt="dog picture 2" height={178}/>
						<img src={Dog3} alt="dog picture 3" height={128}/>
					</div>
					<div className='d-flex flex-column gap-2'>
						<img src={Dog4} alt="dog picture 4" height={162}/>
						<img src={Dog5} alt="dog picture 5" height={148}/>
					</div>
					<div className='d-flex flex-column gap-2'>
						<img src={Dog7} alt="dog picture 7" height={128}/>
						<img src={Dog6} alt="dog picture 6" height={152}/>
					</div>
					<div className='d-flex flex-column gap-2'>
						<img src={Dog8} alt="dog picture 8" height={158}/>
						<img src={Dog9} alt="dog picture 9" height={138}/>
					</div>
					<div className='d-flex flex-column gap-2'>
						<img src={Dog10} alt="dog picture 10" height={128}/>
						<img src={Dog11} alt="dog picture 11" height={158}/>
					</div>
					<div className='d-flex'>
						<img src={Dog12} alt="dog picture 12" height={222}/>
					</div>
				</div>
			</div>
		</>
	)
	
}

export default Dog;