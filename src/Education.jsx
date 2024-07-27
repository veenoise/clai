import Grad from './assets/graduate.svg'

function Education() {
	return (
		<>
			<div className="full-vh d-flex flex-column justify-content-center align-items-center gap-4" id='educ'>
				<img src={Grad} height={128} alt="graduate icon" />
				<div>
					<h2 className='text-center'>LPU - St. Cabrini</h2>
					<p className='text-center'>Bachelor of Science in Medical Technology</p>
				</div>
			</div>
		</>
	)
}

export default Education;