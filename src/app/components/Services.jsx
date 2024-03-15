"use client";

import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import modem from "../assets/images/modem.jpg";
import racks from "../assets/images/racks.jpg";
import wires from "../assets/images/wires.jpg";
import linux from "../assets/linux.png";
import vmware from "../assets/vmware.svg";
import project from "../assets/project.svg";
import cloud from "../assets/cloud.svg";
import consultation from "../assets/consultation.svg";
import support from "../assets/support.svg";
import monitoring from "../assets/monitoring.svg";
import networking from "../assets/networking.svg";
import security from "../assets/security.svg";
import veeam from "../assets/veeam.svg";
import microsoft from "../assets/microsoft.svg";
import aws from "../assets/aws.png";
import azure from "../assets/azure.svg";
import dev from "../assets/dev.svg";
import infrastructure from "../assets/infrastructure.svg";
import rocket from "../assets/images/rocket.png";
import style from "../styles/Services.module.css";
export default function Services() {
  const servicesChunck1 = [
    {
      description:
        "We offer a wide range of cloud services, including storage, computing, networking, and security, to drive innovation and business agility.",
      title: "  Cloud Services",
      icon: cloud,
      service_image: modem,
    },
    {
      description:
        "Comprehensive management of IT projects, from planning and design to implementation and deployment, ensuring they are delivered within established deadlines and budgets.",
      title: "Projects",
      icon: project,
      service_image: modem,
    },
    {
      description:
        "Expert advice on IT strategies, system architecture, cybersecurity, and more, to help businesses make informed and strategic decisions.",
      title: "Consulting",
      icon: consultation,
      service_image: modem,
    },
    {
      description:
        "Proactive and reactive technical support services to quickly resolve any IT issues and minimize downtime.",
      title: "Technical Support",
      icon: support,
      service_image: modem,
    },
    {
      description:
        "Implementation of real-time monitoring solutions to monitor the performance and security of IT systems and proactively respond to any issues.",
      title: "Monitoring",
      icon: monitoring,
      service_image: modem,
    },
    {
      description:
        "Design, implementation, and maintenance of secure and reliable networks to ensure seamless connectivity throughout the organization.",
      title: "Networking",
      icon: networking,
      service_image: modem,
    },
    {
      description:
        "Advanced cybersecurity solutions to protect the company's digital assets against internal and external threats.",
      title: "Informatic Security",
      icon: security,
      service_image: modem,
    },
  ];
  const servicesChunck2 = [
    {
      description:
        " Implementation and administration of virtualized environments using the industry-leading VMWARE technology",
      title: "VMWARE",
      icon: vmware,
      service_image: wires,
    },
    {
      description:
        " Robust and reliable data backup and recovery solutions to protect critical company information against any eventuality",
      title: "VEEAM BACKUP",
      icon: veeam,
      service_image: racks,
    },
    {
      description:
        " Development, implementation, and management of Linux-based systems for stable and secure IT infrastructure",
      title: "LINUX",
      icon: linux,
      service_image: modem,
    },
    {
      description:
        " Configuration and management of Windows Server-based environments to ensure optimal performance and strong security",
      title: "Windows Server",
      icon: microsoft,
      service_image: wires,
    },
    {
      description:
        "Implementation and management of Microsoft Azure and Amazon Web Services (AWS) cloud services for flexible scalability and reliable performance. ",
      title: "Azure and AWS",
      icon: [azure, aws],
      service_image: racks,
    },
    {
      description:
        "     Integration of DevOps practices to enhance collaboration, continuous delivery, and automation in software development and IT infrastructure.",
      title: "DevOps",
      icon: dev,
      service_image: modem,
    },
    {
      description:
        " Design and construction of robust and scalable IT infrastructure that meets current and future needs of the company",
      title: "Infrastructure",
      icon: infrastructure,
      service_image: modem,
    },
  ];
  return (
    <>
      <div className={style.descriptionTeknetium}>
        <p>
          At <strong>Teknetium</strong>, we are committed to providing our
          clients with first-class IT services that drive their growth and
          business success. From strategic consulting to implementation and
          ongoing support, we are here to help businesses tackle today's
          technological challenges and make the most of the opportunities
          offered by the digital age.{" "}
        </p>
        <Image alt="rocket" src={rocket} className={style.rocket}></Image>
      </div>
      <div className={style.services}>
        <div className={style.elementColumn}>
          <div className={style.element}>
            <Image
              src={servicesChunck1[0].service_image}
              className={style.img}
              alt={servicesChunck1[0].title}
            ></Image>
            <div className={style.text}>
              <div className={style.headerElement}>
                <p className={style.iconTitle}>{servicesChunck1[0].title}</p>
                <Image
                  src={servicesChunck1[0].icon}
                  className={style.cloud}
                ></Image>
              </div>
              <p className={style.description}>
                {servicesChunck1[0].description}
              </p>
            </div>
          </div>
          <div className={style.element}>
            <Image
              src={servicesChunck1[1].service_image}
              className={style.img}
              alt={servicesChunck1[1].title}
            ></Image>
            <div className={style.text}>
              <div className={style.headerElement}>
                <p className={style.iconTitle}>{servicesChunck1[1].title}</p>
                <Image
                  src={servicesChunck1[1].icon}
                  className={style.project}
                ></Image>
              </div>
              <p className={style.description}>
                {servicesChunck1[1].description}
              </p>
            </div>
          </div>
          <div className={style.element}>
            <Image
              src={servicesChunck1[2].service_image}
              className={style.img}
              alt={servicesChunck1[2].title}
            ></Image>
            <div className={style.text}>
              <div className={style.headerElement}>
                <p className={style.iconTitle}>{servicesChunck1[2].title}</p>
                <Image
                  src={servicesChunck1[2].icon}
                  className={style.consultation}
                ></Image>
              </div>
              <p className={style.description}>
                {servicesChunck1[2].description}
              </p>
            </div>
          </div>
          <div className={style.element}>
            <Image
              src={servicesChunck1[3].service_image}
              className={style.img}
              alt={servicesChunck1[3].title}
            ></Image>
            <div className={style.text}>
              <div className={style.headerElement}>
                <p className={style.iconTitle}>{servicesChunck1[3].title}</p>
                <Image
                  src={servicesChunck1[3].icon}
                  className={style.support}
                ></Image>
              </div>
              <p className={style.description}>
                {servicesChunck1[3].description}
              </p>
            </div>
          </div>
          <div className={style.element}>
            <Image
              src={servicesChunck1[4].service_image}
              className={style.img}
              alt={servicesChunck1[4].title}
            ></Image>
            <div className={style.text}>
              <div className={style.headerElement}>
                <p className={style.iconTitle}>{servicesChunck1[4].title}</p>
                <Image
                  src={servicesChunck1[4].icon}
                  className={style.monitoring}
                ></Image>
              </div>
              <p className={style.description}>
                {servicesChunck1[4].description}
              </p>
            </div>
          </div>
          <div className={style.element}>
            <Image
              src={servicesChunck1[5].service_image}
              className={style.img}
              alt={servicesChunck1[5].title}
            ></Image>
            <div className={style.text}>
              <div className={style.headerElement}>
                <p className={style.iconTitle}>{servicesChunck1[5].title}</p>
                <Image
                  src={servicesChunck1[5].icon}
                  className={style.networking}
                ></Image>
              </div>
              <p className={style.description}>
                {servicesChunck1[5].description}
              </p>
            </div>
          </div>
          <div className={style.element}>
            <Image
              src={servicesChunck1[6].service_image}
              className={style.img}
              alt={servicesChunck1[6].title}
            ></Image>
            <div className={style.text}>
              <div className={style.headerElement}>
                <p className={style.iconTitle}>{servicesChunck1[6].title}</p>
                <Image
                  src={servicesChunck1[6].icon}
                  className={style.security}
                ></Image>
              </div>
              <p className={style.description}>
                {servicesChunck1[6].description}
              </p>
            </div>
          </div>
        </div>

        <div className={style.elementColumn}>
          <div className={style.element}>
            <Image
              src={servicesChunck2[0].service_image}
              className={style.img}
              alt={servicesChunck2[0].title}
            ></Image>
            <div className={style.text}>
              <div className={style.headerElement}>
                <p className={style.iconTitle}>{servicesChunck2[0].title}</p>
                <Image
                  src={servicesChunck2[0].icon}
                  className={style.vmware}
                ></Image>
              </div>
              <p className={style.description}>
                {servicesChunck2[0].description}
              </p>
            </div>
          </div>
          <div className={style.element}>
            <Image
              src={servicesChunck2[1].service_image}
              className={style.img}
              alt={servicesChunck2[1].title}
            ></Image>
            <div className={style.text}>
              <div className={style.headerElement}>
                <p className={style.iconTitle}>{servicesChunck2[1].title}</p>
                <Image
                  src={servicesChunck2[1].icon}
                  className={style.veeam}
                ></Image>
              </div>
              <p className={style.description}>
                {servicesChunck2[1].description}
              </p>
            </div>
          </div>
          <div className={style.element}>
            <Image
              src={servicesChunck2[2].service_image}
              className={style.img}
              alt={servicesChunck2[2].title}
            ></Image>
            <div className={style.text}>
              <div className={style.headerElement}>
                <p className={style.iconTitle}>{servicesChunck2[2].title}</p>
                <Image
                  src={servicesChunck2[2].icon}
                  className={style.linux}
                ></Image>
              </div>
              <p className={style.description}>
                {servicesChunck2[2].description}
              </p>
            </div>
          </div>
          <div className={style.element}>
            <Image
              src={servicesChunck2[3].service_image}
              className={style.img}
              alt={servicesChunck2[3].title}
            ></Image>
            <div className={style.text}>
              <div className={style.headerElement}>
                <p className={style.iconTitle}>{servicesChunck2[3].title}</p>
                <Image
                  src={servicesChunck2[3].icon}
                  className={style.microsoft}
                ></Image>
              </div>
              <p className={style.description}>
                {servicesChunck2[3].description}
              </p>
            </div>
          </div>
          <div className={style.element}>
            <Image
              src={servicesChunck2[4].service_image}
              className={style.img}
              alt={servicesChunck2[4].title}
            ></Image>
            <div className={style.text}>
              <div className={style.headerElement}>
                <p className={style.iconTitle}>{servicesChunck2[4].title}</p>
                <Image
                  src={servicesChunck2[4].icon[0]}
                  className={style.azure}
                ></Image>
                <Image
                  src={servicesChunck2[4].icon[1]}
                  className={style.aws}
                ></Image>
              </div>
              <p className={style.description}>
                {servicesChunck2[4].description}
              </p>
            </div>
          </div>
          <div className={style.element}>
            <Image
              src={servicesChunck2[5].service_image}
              className={style.img}
              alt={servicesChunck2[5].title}
            ></Image>
            <div className={style.text}>
              <div className={style.headerElement}>
                <p className={style.iconTitle}>{servicesChunck2[5].title}</p>
                <Image
                  src={servicesChunck2[5].icon}
                  className={style.devs}
                ></Image>
              </div>
              <p className={style.description}>
                {servicesChunck2[5].description}
              </p>
            </div>
          </div>
          <div className={style.element}>
            <Image
              src={servicesChunck2[6].service_image}
              className={style.img}
              alt={servicesChunck2[6].title}
            ></Image>
            <div className={style.text}>
              <div className={style.headerElement}>
                <p className={style.iconTitle}>{servicesChunck2[6].title}</p>
                <Image
                  src={servicesChunck2[6].icon}
                  className={style.infrastructure}
                ></Image>
              </div>
              <p className={style.description}>
                {servicesChunck2[6].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
