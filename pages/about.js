import Link from "next/link";
import {AboutMeLayout, Header, TestLayout} from '../components/layout';

export default function MyDescription(){
    return(
        <TestLayout>
            <Header pageTitle={"About - Ryan Velez"}/>
            <h1>My name is Ryan</h1>
            <AboutMeLayout>
                <p>
                    <Link href = "/">
                        <a>Back to Home</a>
                    </Link>
                </p>
            </AboutMeLayout>
        </TestLayout>
    );
}