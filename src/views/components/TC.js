import React, { Component } from "react"
import ReactModal from "react-modal"

class TC extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }

    this.openTermsAndConditionsModal = this.openTermsAndConditionsModal.bind(
      this
    )
    this.closeModal = this.closeModal.bind(this)
  }

  openTermsAndConditionsModal() {
    this.setState({ showModal: true })
  }

  closeModal() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div>
        <p className="mb4">
          By sending your order, you agree to our{" "}
          <span onClick={this.openTermsAndConditionsModal}>
            Terms and Conditions
          </span>
        </p>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          shouldCloseOnEsc={true}
          onRequestClose={this.closeModal}
        >
          <div>
          Pattern
            Terms &amp; Conditions
            Website Terms of Use
            Your use of this website (the &quot;Site&quot;) is conditioned on your acceptance of the following
            terms of use (the &quot;Terms of Use&quot;). By using the Site, you signify your agreement to
            these Terms of Use. Pattern reserves the right to change, modify or remove content
            from the Site without prior notice, due to technical, regulatory, or business limitations or
            for any other reason. Pattern may modify these Terms of Use at any time and at its sole
            discretion and such modifications shall be effective immediately upon posting of the
            modified policies, terms and conditions on the Site.
            1. Limitations:
            You shall not use or introduce into the Site any device, software or routine that could
            damage or interfere with the proper operation of the Site. You shall not directly or
            indirectly take any action to unduly stress the Site, including by way of example and not
            limitation, incurring session lengths or conducting search queries that Pattern
            reasonably determines to be abusive. Patter reserves the right to monitor your use of
            the Site to provide guidance and assistance in the use of the Site and to monitor your
            conformance with these Terms of Use. You acknowledge and hereby consent to such
            monitoring.
            2. Misuse:
            Pattern reserves the right to terminate your access to and use of the Site if, in Pattern’s
            reasonable belief, you have violated the usage limitations set forth in these Terms of
            Use. Reservation of Rights: The information provided by Pattern’s in connection with the
            Site (the &quot;Content&quot;) is the property of and/or proprietary to Pattern. Pattern hereby
            grants you a limited, nonexclusive, nontransferable and nonsublicensable right and
            license, solely for your personal or internal business use to use the Site and the
            services provided thereon. You may not resell, license or otherwise redistribute the
            Content. Nothing contained herein shall be construed as conferring to you, by
            implication or otherwise, any license or right under any copyright, patent, trademark or
            other proprietary right of Pattern. The Content may be provided to Pattern by third
            parties and by governmental and/or regulatory agencies. And while Pattern takes
            commercially reasonable steps to verify the validity of such data, it makes no
            representation or warranty with respect to the accuracy, currency or completeness of
            such third party data.
            3. Disclaimers:

            EXCEPT AS EXPRESSLY PROVIDED HEREUNDER, THE SITE AND THE
            SERVICES, INCLUDING WITHOUT LIMITATION ALL CONTENT AND INFORMATION
            PROVIDED IN CONNECTION WITH THE SERVICES, IS PROVIDED &quot;AS IS,&quot; WITH
            ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR
            IMPLIED. PATTERN EXPRESSLY DISCLAIMS ALL WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-
            INFRINGEMENT, EXPECTED RESULTS OR ARISING FROM A COURSE OF
            DEALING, USAGE OR TRADE PRACTICE. PATTERN SHALL NOT BE LIABLE TO
            YOU FOR ANY CLAIM OR LOSS CLAIMED BY YOU OR ANY THIRD PARTY
            RELATING TO BUSINESS DECISIONS MADE BY YOU AS A RESULT OF YOUR USE
            OF THE SITE AND THE CONTENT. PATTERN DOES NOT GUARANTEE
            CONTINUOUS, UNINTERRUPTED OR SECURE ACCESS TO THE SITE OR THE
            SERVICES. UNDER NO CIRCUMSTANCES SHALL PATTERN BE LIABLE TO YOU
            OR ANY OTHER PARTY FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL,
            SPECIAL OR EXEMPLARY DAMAGES (EVEN IF SUCH DAMAGES ARE
            FORESEEABLE OR WHERE PATTERN HAS BEEN ADVISED OR HAS KNOWLEDGE
            OF THE POSSIBILITY OF SUCH DAMAGES) ARISING FROM YOUR USE OF THE
            SITE.
            4. Restrictions; Indemnification:
            You warrant that you will not use the Site to conduct or engage in unlawful activities; to
            violate any law or regulation; or to violate or infringe upon the rights of Pattern or any
            third party, including without limitation, contractual rights, intellectual property rights, and
            privacy rights. You agree to defend, indemnify and hold harmless Pattern and its
            officers, directors, employees, agents, assigns and licensors from any and all claims,
            demands, liability, judgments, costs and expenses (including reasonable attorneys&#39; fees
            and costs) arising out of or related to any breach of any warranty, representation,
            covenant or agreement made by you in these Terms of Use.
            5. Force Majeure:
            Pattern’s failure to maintain the Site and/or provide the Content as a result of conditions
            beyond its control such as, but not limited to, war, strikes, fires, floods, acts of God,
            governmental restrictions, power failures, natural disasters, acts of terrorism or damage
            or destruction of any network facilities or servers, shall not be deemed a breach of these
            Terms of Use.
          </div>
        </ReactModal>
      </div>
    )
  }
}

export default TC
