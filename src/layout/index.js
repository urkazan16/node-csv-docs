import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
// Local
import Drawer from '../components/Drawer'
import Header from './Header'
import Intro from './Intro'
import Main from './Main'
import Menu from './Menu'
import Footer from './Footer'
import {} from '../fonts/index.css'

class Layout extends Component {
  styles = {
    drawer: {
      backgroundColor: '#EBEBEB',
    },
    footer: {
      // backgroundColor: '#EBEBEB',
    },
  }
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { open: !props.intro, breakpoint: 980 }
  }
  componentDidMount() {
    if (this.props.intro) {
      this.setState({ open: false })
    } else if (window.innerWidth < this.state.breakpoint) {
      this.setState({ open: false })
    }
  }
  toggle() {
    this.setState({ open: !this.state.open })
  }
  render() {
    const { children, data, intro, page } = this.props
    const { styles } = this
    const toggle = this.toggle
    const handleClickLink = () => {
      if (window.innerWidth < this.state.breakpoint) {
        this.setState({ open: false })
      }
    }
    const pages = data.pages.edges.map(page => {
      return { ...page.node.fields, ...page.node.frontmatter }
    })
    const project = {}
    project.slug = page.slug ? /\/(\w+)/.exec(page.slug)[1] : 'project'
    switch (project.slug) {
      case 'project':
        project.name = 'node-csv'
        break
      case 'transform':
        project.name = 'node-stream-transform'
        break
      default:
        project.name = 'node-csv-' + project.slug
    }
    project.label =
      project.slug.charAt(0).toUpperCase() + project.slug.substr(1)
    project.issue = `https://github.com/adaltas/${project.name}/issues`
    project.github = `https://github.com/adaltas/${project.name}`
    return (
      <>
        <Helmet
          title={`CSV ${project.label} - ${page.title}`}
          meta={[
            { name: 'description', content: page.description },
            { name: 'keywords', content: page.keywords },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Drawer
          breakpoint={this.state.breakpoint}
          open={this.state.open}
          onClickModal={() => this.setState({ open: false })}
          width={'23%'}
          main={
            <>
              <Header onMenuClick={toggle} slug={page.slug} project={project}>
                {intro && <Intro />}
              </Header>
              <Main page={page}>{children}</Main>
              <Footer />
            </>
          }
          drawer={
            <Menu
              pages={pages}
              styles={styles.drawer}
              onClickLink={handleClickLink}
            />
          }
        />
      </>
    )
  }
}

const QueryLayout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site: site {
          siteMetadata {
            title
          }
        }
        pages: allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___sort] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                sort
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default QueryLayout
