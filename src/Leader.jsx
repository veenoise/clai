import People from './assets/people.svg'

function Leader() {
	return (
		<>
			<div className="full-vh d-flex flex-column justify-content-center align-items-center gap-4">
				<img src={People} height={128} alt="graduate icon" />
				<div>
					<h2 className='text-center'>LPU - SC College of Allied <br />Medicine Student Council</h2>
					<p className='text-center'>Secretary</p>
				</div>
			</div>
		</>
	)
}

export default Leader;