import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: 'rxovl4ar',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skzoc1PZpvu88BCvZUiFymTyLtZriGjr3m9cUgcR4bxLI9NvvyaBIQPqwvEbpsPQSRE4iPzVB9y4aNv089N9YOUxVIT8rF4z11k7wnuFTnmKIv93VoNFyv4fK6sMbpADteLX7WQBIpsx3qzIQbvJ0Vd4ekYinKMlRgjUmSwSY6JET6Wq3VbW',
    useCdn: false,
})