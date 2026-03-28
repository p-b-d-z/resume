export const resume = {
  contact: {
    name: "Joe Pobuda",
    title: "Architect, Engineer",
    email: "joe@pbdz.xyz",
    phone: "(480) 202-0751"
  },
  profile: "Master of robots. I design, I build, I automate. Writing code since 1995.",

  skills: {
    design: {
      title: "Design",
      description: "Enterprise-class networks and applications at scale. Automation tooling and workflows."
    },
    build: {
      title: "Build",
      description: "Well rounded in all phases of technology; code development, networking, server administration and automation tooling. Best-in-class troubleshooting."
    },
    automation: {
      title: "Automation",
      description: "Ansible magician. Docker wizard. Creating spells in Jenkins to make my robots do my dirty work."
    }
  },

  technical: [
    { title: "Networking", items: ["SD-WAN", "OSPF", "BGP", "VRF"] },
    { title: "Languages", items: ["Python", "Powershell", "Typescript", "Bash"] },
    { title: "Infrastructure", items: ["Cloudformation", "Troposphere", "Pulumi", "Terraform"] }
  ],

  experience: [
    {
      company: "PXG, YAM World Wide",
      title: "Enterprise Architect",
      dates: "2014-Present",
      bullets: [
        "Build, deploy and manage systems for all YAM Worldwide companies, most notably PXG and YAM Powersports.",
        "Recent areas of focus: Ansible, AWS, Brocade VDX, ICX, Cisco IOS, Cisco Meraki, Datadog, Fortinet Fortigate, Jenkins, Nutanix, VMware SD-WAN",
        "Designed and deployed Citrix Cloud VDI using Nutanix and AWS resources.",
        "Developed Nutanix VM (Windows, Ubuntu) provisioning automation using Ansible and Powershell.",
        "Developed an automated disaster recovery workflow that included validation of services using Ansible and Nutanix API.",
        "Migrated and merged all monitoring and alerting tooling to Datadog.",
        "Contributed regularly to home-grown Cloudformation deployment tooling, written in Python.",
        "Contributed regularly to home-grown Slack bot, written in Python and deployed in Amazon ECS.",
        "Primary author and administrator of Ansible automation.",
        "Designed and deployed a 32-rack private datacenter using Fortinet, Brocade, Nutanix.",
        "Designed and deployed a global SD-WAN to connect sites across 3 countries, including 18 U.S. states.",
        "Implemented Anycast DNS, NTP, SMTP and Syslog services across the global SD-WAN network.",
        "Responsible for VAR and vendor relationships, as well as support & ISP contract negotiations."
      ]
    },
    {
      company: "Cancer Treatment Centers of America",
      title: "Systems Engineer",
      dates: "2012-2014",
      bullets: [
        "Deploy and manage systems with a focus on Windows-based servers running on VMware ESX and Cisco UCS, Nexus platforms.",
        "Configure top-of-rack Cisco Nexus switches for VMware ESX deployments.",
        "Maintained a clustered Microsoft Exchange environment (5000+ mailboxes).",
        "Regularly deployed VMware ESX on a combination of Cisco UCS and HP Proliant hardware.",
        "Assisted in the deployment and administration of Bluecat IPAM, DNS and DHCP.",
        "Championed the transition of internal documentation from Sharepoint to Confluence.",
        "Build and manage a new disaster recovery datacenter from the ground-up.",
        "Implemented enterprise patch management and worked on remediation."
      ]
    },
    {
      company: "CableOne",
      title: "Infrastructure Engineer",
      dates: "2012",
      bullets: [
        "Troubleshoot Cisco networking issues within the context of server load balancing and failover.",
        "Deploy and maintain Riverbed Cascade for network mapping and monitoring.",
        "Deploy and maintain Riverbed Steelhead appliances for site to site encryption and compression.",
        "Implement enterprise log management (Logrhythm).",
        "Provision fiber channel and iSCSI storage (3PAR).",
        "Configure fiber channel zoning (Brocade).",
        "Deploy Cisco UCS chassis, blades and service profiles for Redhat/Windows servers.",
        "Planned and implemented VMware ESX upgrades and migrations."
      ]
    },
    {
      company: "DCI Corporation",
      title: "Lead Consultant",
      dates: "2007-2012",
      bullets: [
        "Work with Arizona small businesses to deploy, manage and maintain infrastructure.",
        "Provided managed services to businesses using N-able (now a Solarwinds product) and Microsoft CRM.",
        "Primary areas of focus: Cisco networking (Catalyst, ASA), HP Procurve networking, Windows Small Business Server deployments, Linux server deployment and troubleshooting, Asterix phone server deployments, EMC, HP MSA SAN deployments over iSCSI and fibre channel, Provided ISP services to customers via DSL, PCI and HIPAA network security audits, Data forensics and data recovery"
      ]
    },
    {
      company: "Pobuda Estates, LLC",
      title: "Co-owner",
      dates: "2020-Present",
      bullets: [
        "Business and private residence technical consulting services.",
      ]
    },
    {
      company: "Tier 3 Consulting, LLC",
      title: "Co-owner",
      dates: "2012-Present",
      bullets: [
        "Co-started a business with 2 close friends to provide IT services to Arizona small-businesses.",
        "Provided IT consulting services to Barrett Jackson: Deploy Aruba networking (CX), Multiple datacenter migrations, Migration from VMware ESX/Netapp to Nutanix AHV, Managed Active Directory, Deployed Confluence for internal documentation",
        "Provided IT consulting services to YAM Management, LLC: Deploy Cisco networking (Catalyst, Aironet/WLC), Deploy Bluecat IPAM, DNS and DHCP, Deploy VMware ESX clusters with multipath iSCSI storage"
      ]
    }
  ],

  education: [
    "Collins College, Bachelor of Science in Computer Science — Valedictorian",
    "Collins College, Associate of Science in Computer Science",
    "Handful of expired certifications (AWS, Cisco, Microsoft)",
    "Microsoft Certified Professional, ID# 3879873 - MCSA: Messaging, MCTS: System Center VM Manager, MCTS: Exchange Server, MCTS: Windows Server Virtualization"
  ],

  moreSkills: [
    { title: "Security", items: ["Cohesity", "Duo Security", "Okta"] },
    { title: "Wireless", items: ["Ruckus Wireless", "Ekahau WiFi Design", "Windows-based PKI"] },
    { title: "Other", items: ["Active Directory", "Netapp", "Confluence"] }
  ]
};
