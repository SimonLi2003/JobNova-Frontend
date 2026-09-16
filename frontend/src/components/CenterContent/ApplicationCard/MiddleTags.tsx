import { Button, Flex } from 'antd'

interface MiddleTagsProps {
    jobTags: string[];
}

function MiddleTags({jobTags} : MiddleTagsProps) {
    return (
        <Flex gap={8} wrap align="center">
        {
            jobTags.map((jobTag) => (
                <Button
                    key={jobTag}
                    variant="outlined"
                    shape="round"
                >
                    {jobTag}
                </Button>
            ))
        }
        </Flex>
    )
}

export default MiddleTags
