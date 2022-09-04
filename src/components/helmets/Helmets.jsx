import { useTranslation } from 'next-i18next'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Helmets = ({ pageName }) => {
  const { t } = useTranslation()

  return (
    <Helmet>
      <title>{t(`helmet_${pageName}_title`)}</title>
      <meta name='description' content={t(`helmet_${pageName}_description`)} />
    </Helmet>
  )
}

Helmets.propTypes = {
  pageName: PropTypes.string,
}

export default Helmets
