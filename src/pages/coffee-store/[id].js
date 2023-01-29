import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const CoffeeStore = () => {
    const router = useRouter();
    const param = router.query;
    return (
        <>
            <div>CoffeeStore {param.id}</div>
            <Link href="/">Go back</Link>
        </>)
}

export default CoffeeStore