import { DashboardLayout } from "@/components/layouts/dashboard";

const Commandpage = () => {
    return <div className="page">Commands Page</div>;
}

Commandpage.getLayout = function (page) {
    return <DashboardLayout>{page}</DashboardLayout>;
}

export default Commandpage;
