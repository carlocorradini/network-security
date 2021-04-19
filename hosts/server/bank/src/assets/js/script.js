$(document).ready(() => {
  const $form = $('#form');
  const $withdraw = $('#withdraw');
  const $submit = $form.find('button[type="submit"]');
  const $error = $('#error');

  $form.submit(() => {
    const withdraw = $withdraw.val();
    $error.addClass('is-hidden');

    $withdraw.attr('disabled', 'disabled');
    $submit.addClass('is-loading');

    $.ajax({
      url: '/api/v1/withdraw',
      type: 'POST',
      data: JSON.stringify({
        withdraw
      }),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      async: true,
      success: (data) => {
        $withdraw.removeAttr('disabled');
        $submit.removeClass('is-loading');

        Swal.fire({
          title: 'Success!',
          icon: 'success',
          html: `Withdrawn ${data.withdraw} <i class="fab fa-bitcoin"></i>`
        });
      },
      error: () => {
        $withdraw.removeAttr('disabled');
        $submit.removeClass('is-loading');
        
        $error.removeClass('is-hidden');
      }
    });
  });
});