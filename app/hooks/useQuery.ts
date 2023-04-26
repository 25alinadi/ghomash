import { useRouter } from 'next/router'

const useQuery = () => {
    const router = useRouter()
    let url = new URL(window.location.href)
    const query_params = new URLSearchParams(router.locale);

    const get = (key: string) => {
        return query_params.get(key)
    }

    const set = (key: string, value: any) => {
        return url.searchParams.set(key, value)
    }

    return {
        get, set
    }
}

export default useQuery;