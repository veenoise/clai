import Clai1 from './assets/clai-model-1.jpeg'
import Clai2 from './assets/clai-model-2.jpeg'
import Clai3 from './assets/clai-model-3.jpeg'
import Clai4 from './assets/clai-model-4.jpeg'
import Clai5 from './assets/clai-model-5.jpeg'
import Clai6 from './assets/clai-model-6.jpeg'
import Clai7 from './assets/clai-model-7.jpeg'
import Clai8 from './assets/clai-model-8.jpeg'
import Clai9 from './assets/clai-model-9.jpeg'
import Clai10 from './assets/clai-model-10.jpg'
import Clai11 from './assets/clai-model-11.jpg'
import Clai12 from './assets/clai-model-12.jpeg'

function Model() {
	return (
		<>
			<div className="full-vh d-flex align-items-center justify-content-center">
				<div className='d-flex align-items-start scrollable mx-auto gap-2 max-w'>
					<div>
						<img src={Clai1} alt="clai picture 1" height={189} width={140} className='mt-5' />
					</div>
					<div className='d-flex flex-column gap-2'>
						<img src={Clai2} alt="clai picture 2" height={200} />
						<img src={Clai3} alt="clai picture 3" height={124} />
					</div>
					<div className='d-flex flex-column gap-2'>
						<img src={Clai4} alt="clai picture 4" height={156} className='mt-5'/>
						<img src={Clai5} alt="clai picture 5" height={120} />
						<img src={Clai6} alt="clai picture 6" height={130} />
					</div>
					<div className='d-flex flex-column gap-2'>
						<img src={Clai7} alt="clai picture 7" height={150} style={{marginTop: '30px'}} />
						<img src={Clai8} alt="clai picture 8" height={100} />
						<img src={Clai9} alt="clai picture 9" height={156} />
					</div>
					<div className='d-flex flex-column gap-2'>
						<img src={Clai10} alt="clai picture 10" height={140}/>
						<img src={Clai11} alt="clai picture 11" height={156} />
					</div>
					<div>
						<img src={Clai12} alt="clai picture 12" height={178} className='mt-5' />
					</div>
				</div>
			</div>
		</>
	)
}

export default Model;