import React from 'react'
import ArrowSvg from './ArrowSvg'
import { StyledContactSection, P, A, EmailInput, TextareaWrapper, Textarea, SubmitButton } from './Styled'

const ContactSection = props => (
	<StyledContactSection {...props}>
		<h2>Contact Me</h2>
		<P>I would like to work with you</P>
		<P>
			Feel free to contact me here or <A href="mailto:ironimus13@gmail.com">email directly</A>
		</P>
		<form method="POST" action="https://formspree.io/ironimus13@gmail.com">
			<EmailInput required type="email" name="email" placeholder="Email" />
			<TextareaWrapper>
				<Textarea required name="message" placeholder="Message" />
				<SubmitButton type="submit">
					<ArrowSvg />
					Send
				</SubmitButton>
			</TextareaWrapper>
		</form>
	</StyledContactSection>
)

export default ContactSection
