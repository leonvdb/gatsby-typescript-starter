import * as React from "react"

import SEO from "../components/seo"

interface IProps { }

class IndexPage extends React.Component<IProps, {}>{

  render() {
    return (
      <React.Fragment>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hi people </h1>
        < p > This is Leon's Gatsby TypeScript Starter.</p>
        < p > Now go build something great.</p>
        < div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }
        }>
        </div>
      </React.Fragment>
    )
  }


}

export default IndexPage
