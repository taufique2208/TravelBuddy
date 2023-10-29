import React from 'react'
import './About.css'

const About = () => {
  return (
    <div><div class="container">
    <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-6">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 mt-4 pt-2">
                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" class="img-fluid" alt="Image" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
                        </div>
                        {/* <!--end col--> */}

                        <div class="col-12">
                            <div class="mt-4 pt-2 text-right">
                                {/* <a href="javascript:void(0)" class="btn btn-info">Read More <i class="mdi mdi-chevron-right"></i></a> */}
                            </div>
                        </div>
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end col--> */}

                <div class="col-lg-6 col-md-6 col-6">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1519922639192-e73293ca430e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" class="img-fluid" alt="Image" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
                        </div>
                        {/* <!--end col--> */}

                        <div class="col-lg-12 col-md-12 mt-4 pt-2">
                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1598751337485-0d57b0c50b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1882&q=80" class="img-fluid" alt="Image" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end col--> */}
            </div>
            {/* <!--end row--> */}
        </div>
        {/* <!--end col--> */}

        <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div class="section-title ml-lg-5">
                <h5 class="text-custom font-weight-normal mb-3">About Us</h5>
                <h4 class="title mb-4">
                    Our mission is to <br />
                    make your tarvel more memorable.
                </h4>
                <p class="text-muted mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit quod debitis praesentium pariatur temporibus ipsa, cum quidem obcaecati sunt?</p>

                <div class="row">
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3">
                            <i class="fa fa-play h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0">Adventure</h6>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3">
                            <i class="fa fa-file-download h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0">Peace</h6>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3">
                            <i class="fa fa-user h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0">Nature</h6>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3">
                            <i class="fa fa-image h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0">Serenity</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--end col--> */}
    </div>
    {/* <!--enr row--> */}
</div></div>
  )
}

export default About