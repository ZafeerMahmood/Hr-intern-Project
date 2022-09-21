import React from "react";
import TopSection from "./TopSection";
import SideBarItem from "./SideBarItem";
import {useRouter} from "next/router";
import { supabase } from "../../database/Database";

const Sidebar = () => {

    const router = useRouter();
    return (
        <div
            className={
                "flex flex-col items-start gap-96 pt-14 w-1/4 h-full    border-[1px] border-black shadow border-t-0 shadow-blac overflow-auto"
            }
        >
            <div
                className={"flex flex-col gap-[22px] h-full w-full items-start p-0 "}
            >
                <TopSection name={"Admin"}/>

                <SideBarItem
                    title={"Add Employee"}
                    {...router.pathname === "/addemployees" ? {icon: '/Schedules.svg'} : {icon: '/Schedule1.svg'}}
                    {...router.pathname === "/addemployees" ? {isActive: true} : {isActive: false}}


                    onClick={() => {
                        router.push("/addemployees");
                    }}
                />
                <SideBarItem
                    title={"Care Employees"}
                    {...router.pathname === "/seeemployees" ? {icon: '/POSelected.svg'} : {icon: '/PO.svg'}}
                    {...router.pathname === "/seeemployees" ? {isActive: true} : {isActive: false}}
                    onClick={() => {
                        router.push('/seeemployees')
                    }}
                />
                <SideBarItem
                    title={"Department Inforamtion"}
                    {...router.pathname === "/department_info" ? {icon: '/Schedules.svg'} : {icon: '/Schedule1.svg'}}
                    onClick={() => {
                        router.push('/department_info')
                    }}
                    {...router.pathname === "/department_info" ? {isActive: true} : {isActive: false}}
                />

                        <SideBarItem
                            title={"Department List"}
                            {...router.pathname === "/seedepartment_info" ? {icon: '/POSelected.svg'} : {icon: '/PO.svg'}}
                            {...router.pathname === "/seedepartment_info" ? {isActive: true} : {isActive: false}}
                            onClick={() => {
                                router.push("/seedepartment_info")
                            }}
                        />
                        <SideBarItem
                            title={"Department Employees"}
                            {...router.pathname === "/department_employees" ?{icon: '/Schedules.svg'} : {icon: '/Schedule1.svg'}}
                            onClick={() => {
                                router.push('/department_employees')
                            }}
                            {...router.pathname === "/department_employees" ? {isActive: true} : {isActive: false}}
                        />
                        

                        <SideBarItem
                            title={"Department Employees List"}
                            {...router.pathname === "/seedepartment_employees" ? {icon: '/POSelected.svg'} : {icon: '/PO.svg'}}
                            onClick={() => {
                                router.push('/seedepartment_employees')
                            }}
                            {...router.pathname === "/seedepartment_employees" ? {isActive: true} : {isActive: false}}
                        />
                        
                        <SideBarItem
                            title={"Appraisal Session"}
                            {...router.pathname === "/appraisal" ? {icon: '/Schedules.svg'} : {icon: '/Schedule1.svg'}}
                            onClick={() => {
                                router.push('/appraisal')
                            }}
                            {...router.pathname === "/appraisal" ? {isActive: true} : {isActive: false}}
                        />
                        

                        <SideBarItem
                            title={"Feedback"}
                            {...router.pathname === "/answer" ? {icon: '/POSelected.svg'} : {icon: '/PO.svg'}}
                            onClick={() => {
                                router.push('/answer')
                            }}
                            {...router.pathname === "/answer" ? {isActive: true} : {isActive: false}}
                        />
                        
                        <SideBarItem
                            title={"Projects Information"}
                            {...router.pathname === "/project" ? {icon: '/Schedules.svg'} : {icon: '/Schedule1.svg'}}
                            onClick={() => {
                                router.push('/project')
                            }}
                            {...router.pathname === "/project" ? {isActive: true} : {isActive: false}}
                        />

                        <SideBarItem
                            title={"Projects List"}
                            {...router.pathname === "/seeproject_info" ? {icon: '/POSelected.svg'} : {icon: '/PO.svg'}}
                            onClick={() => {
                                router.push('/seeproject_info')
                            }}
                            {...router.pathname === "/seeproject_info" ? {isActive: true} : {isActive: false}}
                        />
                        
                        <SideBarItem
                            title={"Projects Employees"}
                            {...router.pathname === "/project_employees" ? {icon: '/Schedules.svg'} : {icon: '/Schedule1.svg'}}
                            onClick={() => {
                                router.push('/project_employees')
                            }}
                            {...router.pathname === "/project_employees" ? {isActive: true} : {isActive: false}}
                        />

                        <SideBarItem
                            title={"Projects Employees List"}
                            {...router.pathname === "/see_project_employee" ? {icon: '/POSelected.svg'} : {icon: '/PO.svg'}}
                            onClick={() => {
                                router.push('/see_project_employee')
                            }}
                            {...router.pathname === "/see_project_employee" ? {isActive: true} : {isActive: false}}
                        />

                <div className={"flex flex-col mt-auto mb-4 w-full "}>
                    <SideBarItem
                        title={"Logout"}
                        icon={"/LogoutButton.svg"}
                        onClick={() => {
                           supabase.auth.signOut()
                           router.push('/login')
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
