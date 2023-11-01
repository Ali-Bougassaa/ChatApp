import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
<div style={{ height: '100vh' }}>
    <PrettyChatWindow
      projectId="5c2d7812-f497-41a0-ae0a-f966e9e6b397"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100%' }}
    />
</div>
  )
}
export default ChatsPage