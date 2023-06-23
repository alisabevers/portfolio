function Education() {
    return (
        <div id="educationSection">
            <h1 id="educationHeader">Education</h1>

            <div class="card educationCard col-6 mx-auto">
                <div class="card-body">
                    <div class="row">
                        <h4 class="card-title col">Georgia Institute of Technology</h4>
                        <p class="col-4 card-subtitle text-body-secondary">Class of June 2023</p>
                    </div>
                    <h5 class="certification">Certification of Full-Stack Web Development</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Atlanta, Georgia</h6>
                    <ul class="educationAwardList education-description">
                        <li class="italic">Final Grade 94.79%</li>
                        <li>A 12-week intensive program focused on gaining skills in full-stack web development</li>
                    </ul>
                </div>
            </div>

            <div class="card educationCard col-6 mx-auto">
                <div class="card-body">
                    <div class="row">
                        <h4 class="card-title col">Georgia State University</h4>
                        <p class="col-4 card-subtitle text-body-secondary">Class of May 2020</p>
                    </div>
                    <h5 class="certification">Bachelor of Science in Psychology, Minor in Marketing</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Atlanta, Georgia</h6>
                    <ul class="educationAwardList education-description">
                        <li class="italic">magna cum laude (GPA 3.72)</li>
                        <li>President's List - 2019</li>
                        <li>Dean's List - 2017, 2018, 2019</li>
                        <li>Hope Scholarship - 2016, 2017, 2018, 2019, 2020</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Education;