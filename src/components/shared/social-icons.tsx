import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { IconBaseProps } from "react-icons";

export function GitHubIcon(props: IconBaseProps) {
  return <FaGithub aria-hidden="true" {...props} />;
}

export function LinkedInIcon(props: IconBaseProps) {
  return <FaLinkedin aria-hidden="true" {...props} />;
}
