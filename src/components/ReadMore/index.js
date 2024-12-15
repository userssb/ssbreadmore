// Write your code here
import {useState} from 'react'
import {
  MainCont,
  Head,
  HeadPara,
  ImageCont,
  Desc,
  BtnReadMore,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const desc =
    'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.'
  const [readMore, setReadMore] = useState(false)
  const onClickReadMore = () => {
    setReadMore(prevState => !prevState)
  }

  return (
    <MainCont>
      <Head>React Hooks</Head>
      <HeadPara>Hooks are a new addition to React</HeadPara>
      <ImageCont
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Desc>
        {readMore ? reactHooksDescription : reactHooksDescription.slice(0, 170)}
      </Desc>
      <BtnReadMore onClick={onClickReadMore}>
        {readMore ? 'Read Less' : 'Read More'}
      </BtnReadMore>
    </MainCont>
  )
}
export default ReadMore
