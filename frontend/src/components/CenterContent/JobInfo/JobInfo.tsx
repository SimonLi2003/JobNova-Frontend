import JobInfoHead from "./JobInfoHead";

const data = {
    jobTitle: "Web Application Developer",
    companyAvatarPath: "www.abcde.xyz",
    companyName: "Backd Business Funding",
    jobLocation: "New York, NY",
    workingMode: "Remote",
    percentMatch: 95
}

function JobInfo() {
    return (
        <JobInfoHead {...data} />
    )
}

export default JobInfo