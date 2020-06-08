
function init() {
  renderProj()

}
function renderProj() {
  var projs = getProjs()
  var i = 0
  var $elPortfolio = $('.proj')
  var str = projs.map(function (proj) {
    i++
    return `<div onclick="renderModals(${proj.id})" class="col-md-4 col-sm-6 portfolio-item">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${i}">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="imges/${proj.name}.png" alt="">
    </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
  </div>`
  })
  str = str.join('')
  $elPortfolio.html(str)
}

function renderModals(projId) {
  var projs = getProjs()
  var elModal = $('.modals')
  var proj = projs.find(function (proj) {
    return proj.id === projId
  })
  console.log(proj)
  var str = `
  <div class="portfolio-modal modal fade" id="portfolioModal${proj.id - 100}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              <!-- Project Details Go Here -->
              <h2>${proj.name}</h2>
              <p class="item-intro text-muted">${proj.desc}.</p>
              <img class="img-fluid d-block mx-auto" src="imges/${proj.name}.png" alt="">
              <p>     <a href="${proj.url}" target="_blank"> enter the project :${proj.name}</a></p>
              <ul class="list-inline">
                <li>Date:${proj.publishedAt} </li>
                <li>Client: Finish</li>
                <li>Category: ${proj.title}</li>
              </ul>
              <button class="btn btn-primary" data-dismiss="modal" type="button">
                <i class="fa fa-times"></i>
                Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>`
  elModal.html(str)
}


function onSubmit() {
  var inputMail = $('.email').val()
  var inputSub = $('.subject').val()
  var inputBody = $('.textarea-body').val()
  var link = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=adipeled499@gmail.com&su=${inputSub}&body=${inputBody} ${inputMail}`
  window.location.assign(link, '_blank')

}

