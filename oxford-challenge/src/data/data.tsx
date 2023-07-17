import { BeakerIcon, ServerIcon, ShareIcon } from "@heroicons/react/24/solid";

const COMMON_USE_CASE_MOCK = [
  {
    id: 1,
    amount: 1,
    item: "Living Room",
    icon: <BeakerIcon width={"24px"} height={"24px"} />,
  },
  {
    id: 2,
    amount: 1,
    item: "Bedroom",
    icon: <BeakerIcon width={"24px"} height={"24px"} />,
  },
  {
    id: 3,
    amount: 1,
    item: "Bathroom",
    icon: <BeakerIcon width={"24px"} height={"24px"} />,
  },
];

const BG_IMAGE_MOCK =
  "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const AVATAR_IMG_MOCK =
  "https://images.pexels.com/photos/2726046/pexels-photo-2726046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const COMPANY_SERVICES_MOCK = [
  {
    id: 1,
    title: "Categorize",
  },
  {
    id: 2,
    title: "Show in Funnel",
  },
  {
    id: 3,
    title: "Drive Campaign",
  },
  {
    id: 4,
    title: "Send Online Form",
  },
  {
    id: 5,
    title: "Send Application",
  },
  {
    id: 6,
    title: "Go see Live",
  },
  {
    id: 7,
    title: "Make the Deal",
  },
];

const OWNERS_SECTION = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/2726046/pexels-photo-2726046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Adam Mahfouda",
    subTitle: "CEO, OPGNY",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/2726046/pexels-photo-2726046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Joseph Rodriguez",
    subTitle: "CEO, spire",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.",
  },
];

const PLATFORM_SERVICE_MOCK_DATA = [
  {
    id: 1,
    title: "Import CSV",
    desc: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BeakerIcon,
    bgColorClass: "bg-yellow-50",
    iconColorClass: "text-orange-200",
  },
  {
    id: 2,
    title: "Import CSV",
    desc: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
    bgColorClass: "bg-orange-100",
    iconColorClass: "text-green-200",
  },
  {
    id: 3,
    title: "Import CSV",
    desc: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ShareIcon,
    bgColorClass: "bg-green-100",
    iconColorClass: "text-green-400",
  },
  {
    id: 4,
    title: "Import CSV",
    desc: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BeakerIcon,
    bgColorClass: "bg-blue-50",
    iconColorClass: "text-purple-100",
  },
  {
    id: 5,
    title: "Import CSV",
    desc: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BeakerIcon,
    bgColorClass: "bg-red-50",
    iconColorClass: "text-red-100",
  },
  {
    id: 6,
    title: "Import CSV",
    desc: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BeakerIcon,
    bgColorClass: "bg-orange-50",
    iconColorClass: "text-yellow-200",
  },
  {
    id: 7,
    title: "Import CSV",
    desc: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BeakerIcon,
    bgColorClass: "bg-green-50",
    iconColorClass: "text-green-300",
  },
  {
    id: 8,
    title: "Import CSV",
    desc: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BeakerIcon,
    bgColorClass: "bg-blue-100",
    iconColorClass: "text-blue-200",
  },
];

export {
  PLATFORM_SERVICE_MOCK_DATA,
  COMPANY_SERVICES_MOCK,
  COMMON_USE_CASE_MOCK,
  AVATAR_IMG_MOCK,
  OWNERS_SECTION,
  BG_IMAGE_MOCK,
};
