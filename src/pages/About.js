import profilePhoto from "../assets/images/profile_pic.png";
import ProfileData from "../ProfileData";

export default function AboutPage() {
    return (
        <div className="about-container">
            <div className="profile-photo">
                <img src={profilePhoto} alt="profile"></img>
            </div>
            <div className="exclamation">Hi, This is</div>
            <div className="name">
                <span>{ProfileData.name.firstName}</span>
                <span>{ProfileData.name.lastName}.</span>
            </div>
            <div className="description">
                <div className="title">{ProfileData.aboutSection.title}</div>
                <div className="current-status">
                    {ProfileData.aboutSection.currentStatus}
                </div>
                <div className="education">
                    {ProfileData.aboutSection.education}
                </div>
            </div>
        </div>
    );
}
