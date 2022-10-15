import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import MyContact from "../component/Contact/MyContact";

export default function Contact() {
  return (
    <MyContact>
      <MyContact.List href="#">
        <AiFillGithub />
        Github
      </MyContact.List>
      <MyContact.List href="#">
        <AiFillTwitterCircle />
        Twitter
      </MyContact.List>
      <MyContact.List href="#">
        <AiFillLinkedin />
        Linkedin
      </MyContact.List>
    </MyContact>
  );
}
