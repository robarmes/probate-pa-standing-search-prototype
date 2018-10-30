// Screening questions
module.exports = function (router) {

  router.post('/screening-questions/death-certificate', function (req, res) {
    if (req.body.deathCertificate === 'Yes') {
      res.redirect('domicile')
    } else {
      res.redirect('/stop-page/death-certificate')
    }
  })

  router.post('/screening-questions/domicile', function (req, res) {
    if (req.body.domicile === 'Yes') {
      res.redirect('iht-form')
    } else {
      res.redirect('/stop-page/domicile')
    }
  })

  router.post('/screening-questions/iht-form', function (req, res) {
    if (req.body.haveCompletedIHT === 'Yes') {
      res.redirect('/screening-questions/will-left')
    } else {
      res.redirect('/stop-page/iht')
    }
  })

  router.post('/screening-questions/will-left', function (req, res) {
    if (req.body.willLeft === 'Yes') {
      res.redirect('will-original')
    } else {
      res.redirect('https://probate-intestacy-prototype.herokuapp.com/screening-questions/die-after-october-2014')
    }
  })

  router.post('/screening-questions/will-original', function (req, res) {
    if (req.body.haveOriginalWill === 'Yes') {
      res.redirect('applicant-executor')
    } else {
      res.redirect('/stop-page/not-original')
    }
  })

  router.post('/screening-questions/applicant-executor', function (req, res) {
    if (req.body.applicantIsExecutor === 'Yes') {
      res.redirect('mental-incapacity')
    } else {
      res.redirect('/stop-page/not-executor')
    }
  })

      router.post('/screening-questions/mental-incapacity', function (req, res) {
    if (req.body.mentalIncapacity === 'Yes') {
      res.redirect('/registration/eligible')
    } else {
      res.redirect('/stop-page/mental-incapacity')
    }
  })

  router.post('/screening-questions/codicils', function (req, res) {
    if (req.body.codicils === 'Yes') {
      res.redirect('codicils-number')
    } else {
      res.redirect('applicant-executor')
    }
  })

  router.post('/screening-questions/codicils-number', function (req, res) {
    res.redirect('/deceased/marital-status')
  })

  router.post('/screening-questions/codicils-date', function (req, res) {
    res.redirect('applicant-executor')
  })

  router.post('/screening-questions/iht-form', function (req, res) {
    if (req.body.haveCompletedIHT === 'Yes') {
      res.redirect('/registration/eligible')
    } else {
      res.redirect('/stop-page/iht')
    }
  })

  router.post('/registration/eligible', function (req, res) {
    res.redirect('/registration/index')
  })
}