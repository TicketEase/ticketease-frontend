import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';

 function Footer() {
  return (
    <>
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <div className="footer">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <div className="footer_profile">
              <ul>
                <li>
                  <a href="https://jo.linkedin.com/">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/">
                    <i className="fa fa-github"/>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/?lang=ar">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_copyright">
              <p>© 2023 Ticket Ease. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

    
    // <MDBFooter bgColor='light' className='text-center text-lg-start text-muted h-50'>
    //   <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
    //     <div className='me-5 d-none d-lg-block'>
    //       <span>Get connected with us on social networks:</span>
    //     </div>

    //     <div>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="facebook-f" />
    //       </a>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="twitter" />
    //       </a>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="google" />
    //       </a>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="instagram" />
    //       </a>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="linkedin" />
    //       </a>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="github" />
    //       </a>
    //     </div>
    //   </section>

    //   <section className=''>
    //     <MDBContainer className='text-center text-md-start mt-5'>
    //       <MDBRow className='mt-3'>
    //         <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
    //           <h6 className='text-uppercase fw-bold mb-4'>
    //             <MDBIcon icon="gem" className="me-3" />
    //             ticket ease
    //           </h6>
    //           <p>
    //             you can submite your complian here and one of our team will contact you as soon as possible
    //           </p>
    //         </MDBCol>

    //         <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
    //           <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               react
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               express.js
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               Ticket ease
    //             </a>
    //           </p>
              
    //         </MDBCol>

    //         <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
    //           <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               FAQ
    //             </a>
    //           </p>
              
    //         </MDBCol>

    //         <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
    //           <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
    //           <p>
    //             <MDBIcon icon="home" className="me-2" />
    //             New York, NY 10012, US
    //           </p>
    //           <p>
    //             <MDBIcon icon="envelope" className="me-3" />
    //             info@example.com
    //           </p>
    //           <p>
    //             <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
    //           </p>
              
    //         </MDBCol>
    //       </MDBRow>
    //     </MDBContainer>
    //   </section>

    //   <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    //     © 2021 Copyright: alrights reserved Ticket ease.
    //   </div>
    // </MDBFooter>


  );
}
export default Footer;