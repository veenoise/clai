function Contact() {
	return (
		<>
			<div className="b-t mb-5" id="contact">
				<div className="b-t mx-auto p-3 rounded" id="contact-form">
					<div className="container">
						<h3 className="text-center">The Missing Piece in Your Marketing Puzzle ✨</h3>
						<form method="post" action="https://formspree.io/f/mrbzpqqk" target="_blank">
							<div className="mb-3">
								<label htmlFor="name" className="form-label">Fullname <span className="text-danger" >*</span></label>
								<input type="text" className="form-control" name="Name" id="name" placeholder="John Doe" required />
							</div>
							<div className="mb-3">
								<label htmlFor="company" className="form-label">Company</label>
								<input type="text" className="form-control" name="Company" id="company" placeholder="Company Name" />
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">Email address <span className="text-danger" >*</span></label>
								<input type="email" className="form-control" name="Email" id="email" placeholder="name@example.com" required />
							</div>
							<div className="mb-3">
								<label htmlFor="message" className="form-label">Message <span className="text-danger" >*</span></label>
								<textarea className="form-control" id="message" name="Message" rows="5" placeholder="Share your vision." required />
							</div>
							<div className="d-flex justify-content-end mb-3">
								<button type="submit" className="btn btn-bd-primary">Send</button>	
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact;