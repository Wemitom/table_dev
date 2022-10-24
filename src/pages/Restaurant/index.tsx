import { useParams } from 'react-router-dom';

import Footer from '../../components/Footer';
import HallScheme from '../../components/HallScheme';
import { HallLayout } from '../../components/HallScheme/interfaces';
import ImagesCarousel from '../../components/ImagesCarousel';
import RestaurantDescription from '../../components/RestaurantDescription';

const testData: HallLayout = {
  tables: [
    [
      {
        type: 'ellipse',
        cx: '150.288',
        cy: '105.767',
        rx: '35.85',
        ry: '32.7115',
        transform: 'rotate(-90 150.288 105.767)',
      },
      {
        type: 'ellipse',
        cx: '150.288',
        cy: '197.383',
        rx: '35.85',
        ry: '32.7115',
        transform: 'rotate(-90 150.288 197.383)',
      },
      {
        type: 'ellipse',
        cx: '150.288',
        cy: '289',
        rx: '35.85',
        ry: '32.7115',
        transform: 'rotate(-90 150.288 289)',
      },
      {
        type: 'ellipse',
        cx: '145.096',
        cy: '380.617',
        rx: '35.85',
        ry: '32.7115',
        transform: 'rotate(-90 145.096 380.617)',
      },
      {
        type: 'ellipse',
        cx: '145.096',
        cy: '472.233',
        rx: '35.85',
        ry: '32.7115',
        transform: 'rotate(-90 145.096 472.233)',
      },
      {
        type: 'rect',
        x: '21',
        y: '50',
        width: '124.615',
        height: '478',
        rx: '20',
      },
    ],
    [
      {
        type: 'ellipse',
        cx: '386',
        cy: '67.728',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'ellipse',
        cx: '386',
        cy: '190.832',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'ellipse',
        cx: '478',
        cy: '67.728',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'ellipse',
        cx: '478',
        cy: '190.832',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'ellipse',
        cx: '538',
        cy: '129.28',
        rx: '36.9311',
        ry: '31.5',
        transform: 'rotate(-90 538 129.28)',
      },
      {
        type: 'ellipse',
        cx: '326.5',
        cy: '129.793',
        rx: '36.9311',
        ry: '31.5',
        transform: 'rotate(-90 326.5 129.793)',
      },
      {
        type: 'rect',
        x: '332',
        y: '68.241',
        width: '200',
        height: '123.104',
        rx: '20',
      },
    ],
    [
      {
        type: 'ellipse',
        cx: '732',
        cy: '65.728',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'ellipse',
        cx: '732',
        cy: '188.832',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'ellipse',
        cx: '824',
        cy: '65.728',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'ellipse',
        cx: '824',
        cy: '188.832',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'rect',
        x: '678',
        y: '66.241',
        width: '200',
        height: '123.104',
        rx: '20',
      },
    ],
    [
      {
        type: 'ellipse',
        cx: '1148.5',
        cy: '97.9652',
        rx: '36.9311',
        ry: '31.5',
        transform: 'rotate(-90 1148.5 97.9652)',
      },
      {
        type: 'ellipse',
        cx: '1017.5',
        cy: '97.9652',
        rx: '36.9311',
        ry: '31.5',
        transform: 'rotate(-90 1017.5 97.9652)',
      },
      {
        type: 'rect',
        x: '1023',
        y: '36.4133',
        width: '120',
        height: '123.104',
        rx: '20',
      },
    ],
    [
      {
        type: 'ellipse',
        cx: '1022.5',
        cy: '500.474',
        rx: '36.9311',
        ry: '31.5',
        transform: 'rotate(-90 1022.5 500.474)',
      },
      {
        type: 'ellipse',
        cx: '1148.5',
        cy: '500.474',
        rx: '36.9311',
        ry: '31.5',
        transform: 'rotate(-90 1148.5 500.474)',
      },
      {
        type: 'ellipse',
        cx: '1022.5',
        cy: '406.095',
        rx: '36.9311',
        ry: '31.5',
        transform: 'rotate(-90 1022.5 406.095)',
      },
      {
        type: 'ellipse',
        cx: '1022.5',
        cy: '311.716',
        rx: '36.9311',
        ry: '31.5',
        transform: 'rotate(-90 1022.5 311.716)',
      },
      {
        type: 'ellipse',
        cx: '1148.5',
        cy: '406.095',
        rx: '36.9311',
        ry: '31.5',
        transform: 'rotate(-90 1148.5 406.095)',
      },
      {
        type: 'ellipse',
        cx: '1148.5',
        cy: '311.716',
        rx: '36.9311',
        ry: '31.5',
        transform: 'rotate(-90 1148.5 311.716)',
      },
      {
        type: 'ellipse',
        cx: '1083',
        cy: '236.315',
        rx: '36',
        ry: '32.3147',
        transform: 'rotate(180 1083 236.315)',
      },
      {
        type: 'ellipse',
        cx: '1090',
        cy: '575.875',
        rx: '36',
        ry: '32.3147',
        transform: 'rotate(180 1090 575.875)',
      },
      {
        type: 'rect',
        x: '1023',
        y: '570.233',
        width: '328.276',
        height: '120',
        rx: '20',
        transform: 'rotate(-90 1023 570.233)',
      },
    ],
    [
      {
        type: 'ellipse',
        cx: '400',
        cy: '446.427',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'ellipse',
        cx: '400',
        cy: '575.685',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'ellipse',
        cx: '492',
        cy: '446.427',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'ellipse',
        cx: '584',
        cy: '446.427',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'ellipse',
        cx: '492',
        cy: '575.685',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'ellipse',
        cx: '584',
        cy: '575.685',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'ellipse',
        cx: '657.5',
        cy: '508.491',
        rx: '36.9311',
        ry: '31.5',
        transform: 'rotate(-90 657.5 508.491)',
      },
      {
        type: 'ellipse',
        cx: '326.5',
        cy: '515.672',
        rx: '36.9311',
        ry: '31.5',
        transform: 'rotate(-90 326.5 515.672)',
      },
      {
        type: 'rect',
        x: '332',
        y: '446.94',
        width: '320',
        height: '123.104',
        rx: '20',
      },
    ],
    [
      {
        type: 'ellipse',
        cx: '841',
        cy: '575.685',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'ellipse',
        cx: '841',
        cy: '452.582',
        rx: '36',
        ry: '32.3147',
      },
      {
        type: 'rect',
        x: '781',
        y: '453.095',
        width: '120',
        height: '123.104',
        rx: '20',
      },
    ],
  ],
  labels: [
    'M820.793 524V505.818H823.59L831.172 518.806H831.34V505.818H834.172V524H831.402L823.812 511.074H823.643V524H820.793ZM836.534 518.62V516.658H844.346V518.62H836.534ZM840.431 515.149C839.549 515.149 838.783 514.962 838.132 514.589C837.487 514.217 836.987 513.705 836.631 513.054C836.276 512.403 836.099 511.657 836.099 510.816V509.893C836.099 509.059 836.273 508.316 836.623 507.665C836.978 507.014 837.478 506.502 838.123 506.129C838.774 505.75 839.537 505.561 840.413 505.561C841.301 505.561 842.068 505.75 842.713 506.129C843.358 506.502 843.855 507.014 844.204 507.665C844.553 508.316 844.728 509.059 844.728 509.893V510.816C844.728 511.651 844.553 512.397 844.204 513.054C843.861 513.705 843.367 514.217 842.722 514.589C842.082 514.962 841.319 515.149 840.431 515.149ZM840.431 513.089C841.041 513.089 841.505 512.882 841.825 512.468C842.15 512.053 842.313 511.503 842.313 510.816V509.893C842.313 509.212 842.15 508.671 841.825 508.268C841.505 507.86 841.035 507.656 840.413 507.656C839.792 507.656 839.321 507.86 839.002 508.268C838.688 508.671 838.531 509.212 838.531 509.893V510.816C838.531 511.503 838.691 512.053 839.011 512.468C839.33 512.882 839.804 513.089 840.431 513.089ZM854.716 524.249C853.846 524.243 852.996 524.092 852.168 523.796C851.339 523.494 850.593 523.006 849.93 522.331C849.268 521.65 848.741 520.748 848.35 519.623C847.96 518.493 847.767 517.093 847.773 515.424C847.773 513.867 847.939 512.48 848.27 511.26C848.602 510.041 849.078 509.011 849.7 508.171C850.321 507.324 851.07 506.679 851.946 506.235C852.828 505.792 853.813 505.57 854.902 505.57C856.044 505.57 857.056 505.795 857.938 506.244C858.826 506.694 859.542 507.31 860.087 508.091C860.631 508.866 860.969 509.742 861.099 510.719H857.858C857.693 510.02 857.352 509.464 856.837 509.05C856.328 508.629 855.683 508.419 854.902 508.419C853.641 508.419 852.671 508.967 851.99 510.062C851.315 511.157 850.975 512.66 850.969 514.572H851.093C851.383 514.051 851.759 513.604 852.221 513.231C852.683 512.858 853.203 512.571 853.783 512.37C854.369 512.163 854.988 512.059 855.639 512.059C856.704 512.059 857.66 512.314 858.506 512.823C859.359 513.332 860.033 514.033 860.531 514.927C861.028 515.815 861.273 516.833 861.267 517.981C861.273 519.176 861.001 520.251 860.451 521.203C859.9 522.15 859.134 522.896 858.151 523.441C857.169 523.985 856.024 524.254 854.716 524.249ZM854.698 521.585C855.343 521.585 855.92 521.428 856.429 521.115C856.938 520.801 857.34 520.378 857.636 519.845C857.932 519.312 858.077 518.715 858.071 518.052C858.077 517.401 857.935 516.812 857.645 516.285C857.361 515.758 856.968 515.341 856.464 515.033C855.961 514.726 855.387 514.572 854.742 514.572C854.263 514.572 853.816 514.663 853.402 514.847C852.987 515.03 852.626 515.285 852.319 515.61C852.011 515.93 851.768 516.303 851.591 516.729C851.419 517.149 851.33 517.599 851.324 518.078C851.33 518.712 851.478 519.295 851.768 519.827C852.058 520.36 852.458 520.786 852.967 521.106C853.476 521.425 854.053 521.585 854.698 521.585Z',
    'M471.793 517V498.818H474.59L482.172 511.806H482.34V498.818H485.172V517H482.402L474.812 504.074H474.643V517H471.793ZM487.534 511.62V509.658H495.346V511.62H487.534ZM491.431 508.149C490.549 508.149 489.783 507.962 489.132 507.589C488.487 507.217 487.987 506.705 487.631 506.054C487.276 505.403 487.099 504.657 487.099 503.816V502.893C487.099 502.059 487.273 501.316 487.623 500.665C487.978 500.014 488.478 499.502 489.123 499.129C489.774 498.75 490.537 498.561 491.413 498.561C492.301 498.561 493.068 498.75 493.713 499.129C494.358 499.502 494.855 500.014 495.204 500.665C495.553 501.316 495.728 502.059 495.728 502.893V503.816C495.728 504.651 495.553 505.397 495.204 506.054C494.861 506.705 494.367 507.217 493.722 507.589C493.082 507.962 492.319 508.149 491.431 508.149ZM491.431 506.089C492.041 506.089 492.505 505.882 492.825 505.468C493.15 505.053 493.313 504.503 493.313 503.816V502.893C493.313 502.212 493.15 501.671 492.825 501.268C492.505 500.86 492.035 500.656 491.413 500.656C490.792 500.656 490.321 500.86 490.002 501.268C489.688 501.671 489.531 502.212 489.531 502.893V503.816C489.531 504.503 489.691 505.053 490.011 505.468C490.33 505.882 490.804 506.089 491.431 506.089ZM505.378 517.249C504.194 517.249 503.135 517.027 502.2 516.583C501.265 516.133 500.522 515.517 499.972 514.736C499.427 513.955 499.137 513.061 499.102 512.055H502.298C502.357 512.801 502.679 513.41 503.265 513.884C503.851 514.351 504.556 514.585 505.378 514.585C506.023 514.585 506.597 514.437 507.1 514.141C507.604 513.845 508 513.434 508.29 512.907C508.58 512.381 508.722 511.78 508.716 511.105C508.722 510.419 508.577 509.809 508.281 509.276C507.985 508.744 507.58 508.326 507.065 508.025C506.55 507.717 505.958 507.563 505.289 507.563C504.745 507.557 504.209 507.658 503.683 507.865C503.156 508.072 502.739 508.344 502.431 508.681L499.457 508.193L500.407 498.818H510.953V501.57H503.132L502.608 506.391H502.715C503.052 505.994 503.529 505.666 504.144 505.406C504.76 505.139 505.434 505.006 506.168 505.006C507.269 505.006 508.252 505.266 509.116 505.787C509.98 506.302 510.661 507.012 511.158 507.918C511.655 508.824 511.903 509.859 511.903 511.025C511.903 512.227 511.625 513.298 511.069 514.239C510.518 515.174 509.752 515.911 508.77 516.45C507.793 516.982 506.663 517.249 505.378 517.249Z',
    'M1062.79 415V396.818H1065.59L1073.17 409.806H1073.34V396.818H1076.17V415H1073.4L1065.81 402.074H1065.64V415H1062.79ZM1078.53 409.62V407.658H1086.35V409.62H1078.53ZM1082.43 406.149C1081.55 406.149 1080.78 405.962 1080.13 405.589C1079.49 405.217 1078.99 404.705 1078.63 404.054C1078.28 403.403 1078.1 402.657 1078.1 401.816V400.893C1078.1 400.059 1078.27 399.316 1078.62 398.665C1078.98 398.014 1079.48 397.502 1080.12 397.129C1080.77 396.75 1081.54 396.561 1082.41 396.561C1083.3 396.561 1084.07 396.75 1084.71 397.129C1085.36 397.502 1085.85 398.014 1086.2 398.665C1086.55 399.316 1086.73 400.059 1086.73 400.893V401.816C1086.73 402.651 1086.55 403.397 1086.2 404.054C1085.86 404.705 1085.37 405.217 1084.72 405.589C1084.08 405.962 1083.32 406.149 1082.43 406.149ZM1082.43 404.089C1083.04 404.089 1083.51 403.882 1083.82 403.468C1084.15 403.053 1084.31 402.503 1084.31 401.816V400.893C1084.31 400.212 1084.15 399.671 1083.82 399.268C1083.51 398.86 1083.03 398.656 1082.41 398.656C1081.79 398.656 1081.32 398.86 1081 399.268C1080.69 399.671 1080.53 400.212 1080.53 400.893V401.816C1080.53 402.503 1080.69 403.053 1081.01 403.468C1081.33 403.882 1081.8 404.089 1082.43 404.089ZM1089.73 411.626V409.007L1097.44 396.818H1099.63V400.547H1098.3L1093.1 408.777V408.919H1103.87V411.626H1089.73ZM1098.4 415V410.827L1098.44 409.656V396.818H1101.55V415H1098.4Z',
    'M1062.79 107V88.8182H1065.59L1073.17 101.806H1073.34V88.8182H1076.17V107H1073.4L1065.81 94.0739H1065.64V107H1062.79ZM1078.53 101.62V99.658H1086.35V101.62H1078.53ZM1082.43 98.1488C1081.55 98.1488 1080.78 97.9624 1080.13 97.5895C1079.49 97.2166 1078.99 96.7047 1078.63 96.0536C1078.28 95.4026 1078.1 94.6568 1078.1 93.8164V92.8931C1078.1 92.0586 1078.27 91.3158 1078.62 90.6648C1078.98 90.0137 1079.48 89.5018 1080.12 89.1289C1080.77 88.7501 1081.54 88.5607 1082.41 88.5607C1083.3 88.5607 1084.07 88.7501 1084.71 89.1289C1085.36 89.5018 1085.85 90.0137 1086.2 90.6648C1086.55 91.3158 1086.73 92.0586 1086.73 92.8931V93.8164C1086.73 94.6509 1086.55 95.3967 1086.2 96.0536C1085.86 96.7047 1085.37 97.2166 1084.72 97.5895C1084.08 97.9624 1083.32 98.1488 1082.43 98.1488ZM1082.43 96.0891C1083.04 96.0891 1083.51 95.882 1083.82 95.4677C1084.15 95.0534 1084.31 94.503 1084.31 93.8164V92.8931C1084.31 92.2125 1084.15 91.6709 1083.82 91.2685C1083.51 90.8601 1083.03 90.6559 1082.41 90.6559C1081.79 90.6559 1081.32 90.8601 1081 91.2685C1080.69 91.6709 1080.53 92.2125 1080.53 92.8931V93.8164C1080.53 94.503 1080.69 95.0534 1081.01 95.4677C1081.33 95.882 1081.8 96.0891 1082.43 96.0891ZM1096.58 107.249C1095.3 107.249 1094.17 107.03 1093.17 106.592C1092.18 106.154 1091.4 105.544 1090.83 104.763C1090.26 103.982 1089.95 103.079 1089.92 102.055H1093.25C1093.28 102.546 1093.45 102.975 1093.74 103.342C1094.04 103.703 1094.43 103.984 1094.92 104.186C1095.41 104.387 1095.96 104.488 1096.57 104.488C1097.22 104.488 1097.8 104.375 1098.3 104.15C1098.81 103.919 1099.2 103.6 1099.49 103.191C1099.77 102.783 1099.91 102.312 1099.9 101.78C1099.91 101.229 1099.77 100.744 1099.48 100.324C1099.19 99.9036 1098.77 99.5752 1098.22 99.3384C1097.67 99.1017 1097.01 98.9833 1096.25 98.9833H1094.64V96.4442H1096.25C1096.88 96.4442 1097.43 96.3348 1097.91 96.1158C1098.38 95.8968 1098.76 95.589 1099.03 95.1925C1099.3 94.79 1099.44 94.3254 1099.43 93.7987C1099.44 93.2837 1099.32 92.8369 1099.09 92.4581C1098.86 92.0734 1098.53 91.7745 1098.1 91.5614C1097.68 91.3484 1097.19 91.2418 1096.62 91.2418C1096.06 91.2418 1095.55 91.3424 1095.07 91.5437C1094.6 91.7449 1094.22 92.032 1093.93 92.4048C1093.64 92.7718 1093.48 93.2098 1093.47 93.7188H1090.3C1090.32 92.7008 1090.61 91.8071 1091.18 91.0376C1091.74 90.2623 1092.5 89.6586 1093.45 89.2266C1094.4 88.7886 1095.46 88.5696 1096.64 88.5696C1097.85 88.5696 1098.9 88.7975 1099.8 89.2532C1100.7 89.703 1101.39 90.3097 1101.88 91.0732C1102.37 91.8366 1102.62 92.68 1102.62 93.6033C1102.63 94.6272 1102.32 95.4854 1101.71 96.1779C1101.11 96.8704 1100.32 97.3232 1099.33 97.5362V97.6783C1100.61 97.8558 1101.59 98.3293 1102.27 99.0987C1102.96 99.8622 1103.3 100.812 1103.29 101.949C1103.29 102.967 1103 103.878 1102.42 104.683C1101.85 105.482 1101.06 106.109 1100.04 106.565C1099.04 107.021 1097.88 107.249 1096.58 107.249Z',
    'M413.793 139V120.818H416.59L424.172 133.806H424.34V120.818H427.172V139H424.402L416.812 126.074H416.643V139H413.793ZM429.534 133.62V131.658H437.346V133.62H429.534ZM433.431 130.149C432.549 130.149 431.783 129.962 431.132 129.589C430.487 129.217 429.987 128.705 429.631 128.054C429.276 127.403 429.099 126.657 429.099 125.816V124.893C429.099 124.059 429.273 123.316 429.623 122.665C429.978 122.014 430.478 121.502 431.123 121.129C431.774 120.75 432.537 120.561 433.413 120.561C434.301 120.561 435.068 120.75 435.713 121.129C436.358 121.502 436.855 122.014 437.204 122.665C437.553 123.316 437.728 124.059 437.728 124.893V125.816C437.728 126.651 437.553 127.397 437.204 128.054C436.861 128.705 436.367 129.217 435.722 129.589C435.082 129.962 434.319 130.149 433.431 130.149ZM433.431 128.089C434.041 128.089 434.505 127.882 434.825 127.468C435.15 127.053 435.313 126.503 435.313 125.816V124.893C435.313 124.212 435.15 123.671 434.825 123.268C434.505 122.86 434.035 122.656 433.413 122.656C432.792 122.656 432.321 122.86 432.002 123.268C431.688 123.671 431.531 124.212 431.531 124.893V125.816C431.531 126.503 431.691 127.053 432.011 127.468C432.33 127.882 432.804 128.089 433.431 128.089ZM448.452 120.818V139H445.159V124.023H445.052L440.8 126.74V123.721L445.319 120.818H448.452Z',
    'M758.793 137V118.818H761.59L769.172 131.806H769.34V118.818H772.172V137H769.402L761.812 124.074H761.643V137H758.793ZM774.534 131.62V129.658H782.346V131.62H774.534ZM778.431 128.149C777.549 128.149 776.783 127.962 776.132 127.589C775.487 127.217 774.987 126.705 774.631 126.054C774.276 125.403 774.099 124.657 774.099 123.816V122.893C774.099 122.059 774.273 121.316 774.623 120.665C774.978 120.014 775.478 119.502 776.123 119.129C776.774 118.75 777.537 118.561 778.413 118.561C779.301 118.561 780.068 118.75 780.713 119.129C781.358 119.502 781.855 120.014 782.204 120.665C782.553 121.316 782.728 122.059 782.728 122.893V123.816C782.728 124.651 782.553 125.397 782.204 126.054C781.861 126.705 781.367 127.217 780.722 127.589C780.082 127.962 779.319 128.149 778.431 128.149ZM778.431 126.089C779.041 126.089 779.505 125.882 779.825 125.468C780.15 125.053 780.313 124.503 780.313 123.816V122.893C780.313 122.212 780.15 121.671 779.825 121.268C779.505 120.86 779.035 120.656 778.413 120.656C777.792 120.656 777.321 120.86 777.002 121.268C776.688 121.671 776.531 122.212 776.531 122.893V123.816C776.531 124.503 776.691 125.053 777.011 125.468C777.33 125.882 777.804 126.089 778.431 126.089ZM786.057 137V134.621L792.369 128.433C792.973 127.823 793.476 127.282 793.879 126.808C794.281 126.335 794.583 125.876 794.784 125.432C794.985 124.988 795.086 124.515 795.086 124.012C795.086 123.438 794.956 122.946 794.695 122.538C794.435 122.124 794.077 121.804 793.621 121.579C793.165 121.354 792.647 121.242 792.067 121.242C791.47 121.242 790.946 121.366 790.496 121.615C790.046 121.857 789.697 122.204 789.449 122.653C789.206 123.103 789.085 123.639 789.085 124.26H785.951C785.951 123.106 786.214 122.103 786.741 121.251C787.268 120.398 787.993 119.739 788.916 119.271C789.845 118.803 790.91 118.57 792.112 118.57C793.331 118.57 794.402 118.797 795.326 119.253C796.249 119.709 796.965 120.333 797.474 121.126C797.989 121.92 798.246 122.825 798.246 123.843C798.246 124.524 798.116 125.192 797.856 125.849C797.595 126.506 797.137 127.234 796.48 128.033C795.829 128.832 794.914 129.8 793.737 130.936L790.603 134.124V134.248H798.522V137H786.057Z',
    'M92 378.207H73.8182V366.515H76.5792V374.913H80.8406V371.406C80.8406 370.015 81.0684 368.823 81.5241 367.828C81.974 366.828 82.6102 366.062 83.4329 365.529C84.2556 364.996 85.2232 364.73 86.3359 364.73C87.4545 364.73 88.44 364.996 89.2923 365.529C90.1386 366.062 90.8015 366.828 91.2809 367.828C91.7603 368.823 92 370.015 92 371.406V378.207ZM89.3011 374.913V371.406C89.3011 370.672 89.1621 370.051 88.8839 369.542C88.6057 369.033 88.2388 368.648 87.783 368.388C87.3273 368.121 86.8331 367.988 86.3004 367.988C85.531 367.988 84.877 368.284 84.3384 368.876C83.7939 369.462 83.5217 370.305 83.5217 371.406V374.913H89.3011ZM92.2752 358.067C92.2752 358.931 92.1213 359.71 91.8136 360.402C91.4999 361.089 91.0382 361.633 90.4286 362.036C89.819 362.432 89.0674 362.631 88.1737 362.631C87.4042 362.631 86.768 362.488 86.2649 362.204C85.7618 361.92 85.3594 361.533 85.0575 361.041C84.7557 360.55 84.5278 359.997 84.3739 359.381C84.2141 358.76 84.0987 358.118 84.0277 357.455C83.9448 356.656 83.8709 356.008 83.8058 355.51C83.7347 355.013 83.6282 354.652 83.4862 354.427C83.3382 354.197 83.1103 354.081 82.8026 354.081H82.7493C82.0805 354.081 81.5626 354.279 81.1957 354.676C80.8287 355.073 80.6452 355.644 80.6452 356.389C80.6452 357.177 80.8169 357.801 81.1602 358.263C81.5034 358.718 81.9089 359.026 82.3764 359.186L81.9503 362.187C81.1217 361.95 80.4292 361.559 79.8729 361.015C79.3106 360.47 78.8904 359.804 78.6122 359.017C78.3281 358.23 78.1861 357.36 78.1861 356.407C78.1861 355.75 78.263 355.096 78.4169 354.445C78.5708 353.794 78.8253 353.199 79.1804 352.661C79.5296 352.122 80.006 351.69 80.6097 351.365C81.2134 351.033 81.968 350.867 82.8736 350.867H92V353.957H90.1268V354.063C90.5056 354.259 90.8607 354.534 91.1921 354.889C91.5176 355.238 91.781 355.679 91.9822 356.212C92.1776 356.739 92.2752 357.357 92.2752 358.067ZM89.9137 357.233C89.9137 356.588 89.7865 356.028 89.532 355.555C89.2715 355.081 88.9283 354.717 88.5021 354.463C88.076 354.202 87.6114 354.072 87.1083 354.072H85.5014C85.5843 354.173 85.6612 354.345 85.7322 354.587C85.8033 354.824 85.8654 355.09 85.9187 355.386C85.9719 355.682 86.0193 355.975 86.0607 356.265C86.1022 356.555 86.1377 356.807 86.1673 357.02C86.2324 357.499 86.3389 357.928 86.4869 358.307C86.6348 358.686 86.842 358.985 87.1083 359.204C87.3687 359.423 87.7061 359.532 88.1204 359.532C88.7122 359.532 89.1591 359.316 89.4609 358.884C89.7628 358.452 89.9137 357.902 89.9137 357.233ZM97.1136 347.636H78.3636V344.475H80.6186V344.289C80.2872 344.123 79.935 343.889 79.5621 343.588C79.1834 343.286 78.8608 342.877 78.5945 342.362C78.3222 341.847 78.1861 341.191 78.1861 340.392C78.1861 339.338 78.4554 338.388 78.994 337.542C79.5266 336.689 80.3168 336.015 81.3643 335.518C82.406 335.015 83.6844 334.763 85.1996 334.763C86.697 334.763 87.9695 335.009 89.017 335.5C90.0646 335.991 90.8636 336.66 91.4141 337.506C91.9645 338.353 92.2397 339.311 92.2397 340.383C92.2397 341.164 92.1095 341.812 91.8491 342.327C91.5887 342.842 91.275 343.256 90.908 343.57C90.5352 343.878 90.183 344.117 89.8516 344.289V344.422H97.1136V347.636ZM85.1818 344.484C86.0637 344.484 86.8361 344.36 87.4989 344.111C88.1618 343.857 88.6797 343.493 89.0526 343.019C89.4195 342.54 89.603 341.96 89.603 341.279C89.603 340.569 89.4136 339.974 89.0348 339.495C88.6501 339.015 88.1263 338.654 87.4634 338.412C86.7946 338.163 86.0341 338.039 85.1818 338.039C84.3355 338.039 83.5838 338.16 82.9268 338.403C82.2699 338.646 81.755 339.007 81.3821 339.486C81.0092 339.965 80.8228 340.563 80.8228 341.279C80.8228 341.966 81.0033 342.549 81.3643 343.028C81.7254 343.508 82.2314 343.872 82.8825 344.12C83.5335 344.363 84.3 344.484 85.1818 344.484ZM83.8501 322.645H86.4869V329.907H83.8501V322.645ZM78.3636 328.912H92V332.011H78.3636V328.912ZM78.3636 320.541H92V323.63H78.3636V320.541ZM92.2752 313.365C92.2752 314.229 92.1213 315.008 91.8136 315.7C91.4999 316.387 91.0382 316.931 90.4286 317.334C89.819 317.73 89.0674 317.928 88.1737 317.928C87.4042 317.928 86.768 317.786 86.2649 317.502C85.7618 317.218 85.3594 316.83 85.0575 316.339C84.7557 315.848 84.5278 315.295 84.3739 314.679C84.2141 314.058 84.0987 313.415 84.0277 312.753C83.9448 311.954 83.8709 311.305 83.8058 310.808C83.7347 310.311 83.6282 309.95 83.4862 309.725C83.3382 309.494 83.1103 309.379 82.8026 309.379H82.7493C82.0805 309.379 81.5626 309.577 81.1957 309.974C80.8287 310.37 80.6452 310.941 80.6452 311.687C80.6452 312.474 80.8169 313.099 81.1602 313.56C81.5034 314.016 81.9089 314.324 82.3764 314.484L81.9503 317.484C81.1217 317.248 80.4292 316.857 79.8729 316.313C79.3106 315.768 78.8904 315.102 78.6122 314.315C78.3281 313.528 78.1861 312.658 78.1861 311.705C78.1861 311.048 78.263 310.394 78.4169 309.743C78.5708 309.092 78.8253 308.497 79.1804 307.959C79.5296 307.42 80.006 306.988 80.6097 306.662C81.2134 306.331 81.968 306.165 82.8736 306.165H92V309.255H90.1268V309.361C90.5056 309.557 90.8607 309.832 91.1921 310.187C91.5176 310.536 91.781 310.977 91.9822 311.51C92.1776 312.036 92.2752 312.655 92.2752 313.365ZM89.9137 312.531C89.9137 311.886 89.7865 311.326 89.532 310.853C89.2715 310.379 88.9283 310.015 88.5021 309.761C88.076 309.5 87.6114 309.37 87.1083 309.37H85.5014C85.5843 309.471 85.6612 309.642 85.7322 309.885C85.8033 310.122 85.8654 310.388 85.9187 310.684C85.9719 310.98 86.0193 311.273 86.0607 311.563C86.1022 311.853 86.1377 312.104 86.1673 312.318C86.2324 312.797 86.3389 313.226 86.4869 313.605C86.6348 313.984 86.842 314.283 87.1083 314.502C87.3687 314.72 87.7061 314.83 88.1204 314.83C88.7122 314.83 89.1591 314.614 89.4609 314.182C89.7628 313.75 89.9137 313.199 89.9137 312.531ZM92 294.873H80.9737V297.785C80.9737 298.524 81.1454 299.093 81.4886 299.489C81.8319 299.886 82.258 300.081 82.767 300.075C83.276 300.081 83.6963 299.895 84.0277 299.516C84.3591 299.137 84.5249 298.595 84.5249 297.891V293.861H86.8686V297.891C86.8686 298.98 86.697 299.921 86.3537 300.714C86.0104 301.507 85.5251 302.117 84.8977 302.543C84.2704 302.969 83.5365 303.182 82.696 303.182C81.8201 303.182 81.0595 302.966 80.4144 302.534C79.7634 302.096 79.2603 301.475 78.9052 300.67C78.5442 299.859 78.3636 298.897 78.3636 297.785V291.863H92V294.873ZM92 303.679L85.0043 299.871V296.701L92 300.519V303.679ZM92.2663 276.478C92.2663 277.839 91.9674 279.008 91.3697 279.984C90.7719 280.955 89.9463 281.704 88.8928 282.231C87.8333 282.751 86.6141 283.012 85.2351 283.012C83.8501 283.012 82.628 282.745 81.5685 282.213C80.5032 281.68 79.6746 280.928 79.0827 279.958C78.485 278.981 78.1861 277.827 78.1861 276.495C78.1861 275.389 78.3903 274.409 78.7987 273.557C79.2011 272.699 79.7723 272.015 80.5121 271.506C81.246 270.997 82.1042 270.707 83.0866 270.636V273.708C82.4297 273.832 81.8822 274.128 81.4442 274.596C81.0004 275.057 80.7784 275.676 80.7784 276.451C80.7784 277.108 80.956 277.685 81.3111 278.182C81.6603 278.679 82.1634 279.067 82.8203 279.345C83.4773 279.618 84.2644 279.754 85.1818 279.754C86.111 279.754 86.91 279.618 87.5788 279.345C88.2417 279.073 88.7537 278.691 89.1147 278.2C89.4698 277.703 89.6474 277.12 89.6474 276.451C89.6474 275.978 89.5586 275.554 89.381 275.182C89.1976 274.803 88.9342 274.486 88.5909 274.232C88.2476 273.977 87.8304 273.803 87.3391 273.708V270.636C88.3039 270.713 89.1591 270.997 89.9048 271.488C90.6446 271.98 91.2247 272.648 91.6449 273.495C92.0592 274.341 92.2663 275.335 92.2663 276.478ZM81.0004 268.987H78.3636V257.055H81.0004V261.468H92V264.575H81.0004V268.987ZM92.2663 249.11C92.2663 250.441 91.9734 251.595 91.3874 252.572C90.8015 253.548 89.9818 254.306 88.9283 254.845C87.8748 255.377 86.6437 255.644 85.2351 255.644C83.8265 255.644 82.5924 255.377 81.533 254.845C80.4736 254.306 79.6509 253.548 79.065 252.572C78.479 251.595 78.1861 250.441 78.1861 249.11C78.1861 247.778 78.479 246.624 79.065 245.647C79.6509 244.671 80.4736 243.916 81.533 243.383C82.5924 242.845 83.8265 242.575 85.2351 242.575C86.6437 242.575 87.8748 242.845 88.9283 243.383C89.9818 243.916 90.8015 244.671 91.3874 245.647C91.9734 246.624 92.2663 247.778 92.2663 249.11ZM89.6918 249.092C89.6918 248.37 89.4935 247.766 89.0969 247.281C88.6945 246.795 88.1559 246.434 87.4812 246.198C86.8065 245.955 86.0548 245.834 85.2262 245.834C84.3917 245.834 83.6371 245.955 82.9624 246.198C82.2817 246.434 81.7402 246.795 81.3377 247.281C80.9353 247.766 80.734 248.37 80.734 249.092C80.734 249.832 80.9353 250.447 81.3377 250.938C81.7402 251.424 82.2817 251.788 82.9624 252.03C83.6371 252.267 84.3917 252.385 85.2262 252.385C86.0548 252.385 86.8065 252.267 87.4812 252.03C88.1559 251.788 88.6945 251.424 89.0969 250.938C89.4935 250.447 89.6918 249.832 89.6918 249.092ZM87.6499 236.749L78.3636 231.29V227.987H92V231.094H82.7049L92 236.536V239.848H78.3636V236.749H87.6499ZM73.6761 232.168V229.763C74.7119 229.763 75.5523 230.138 76.1974 230.89C76.8366 231.636 77.1563 232.648 77.1563 233.926C77.1563 235.193 76.8366 236.202 76.1974 236.954C75.5523 237.699 74.7119 238.069 73.6761 238.063V235.675C74.1023 235.675 74.484 235.545 74.8214 235.285C75.1528 235.018 75.3185 234.565 75.3185 233.926C75.3185 233.299 75.1528 232.852 74.8214 232.586C74.4899 232.313 74.1082 232.174 73.6761 232.168ZM92 224.687H78.3636V221.473H83.8679V220.301L78.3636 216.199V212.329L85.0575 217.38L92 212.275V216.164L86.8597 219.901V221.473H92V224.687ZM92.2752 206.529C92.2752 207.393 92.1213 208.172 91.8136 208.864C91.4999 209.551 91.0382 210.095 90.4286 210.498C89.819 210.894 89.0674 211.092 88.1737 211.092C87.4042 211.092 86.768 210.95 86.2649 210.666C85.7618 210.382 85.3594 209.995 85.0575 209.503C84.7557 209.012 84.5278 208.459 84.3739 207.843C84.2141 207.222 84.0987 206.58 84.0277 205.917C83.9448 205.118 83.8709 204.47 83.8058 203.972C83.7347 203.475 83.6282 203.114 83.4862 202.889C83.3382 202.658 83.1103 202.543 82.8026 202.543H82.7493C82.0805 202.543 81.5626 202.741 81.1957 203.138C80.8287 203.534 80.6452 204.106 80.6452 204.851C80.6452 205.638 80.8169 206.263 81.1602 206.725C81.5034 207.18 81.9089 207.488 82.3764 207.648L81.9503 210.649C81.1217 210.412 80.4292 210.021 79.8729 209.477C79.3106 208.932 78.8904 208.266 78.6122 207.479C78.3281 206.692 78.1861 205.822 78.1861 204.869C78.1861 204.212 78.263 203.558 78.4169 202.907C78.5708 202.256 78.8253 201.661 79.1804 201.123C79.5296 200.584 80.006 200.152 80.6097 199.826C81.2134 199.495 81.968 199.329 82.8736 199.329H92V202.419H90.1268V202.525C90.5056 202.721 90.8607 202.996 91.1921 203.351C91.5176 203.7 91.781 204.141 91.9822 204.674C92.1776 205.2 92.2752 205.819 92.2752 206.529ZM89.9137 205.695C89.9137 205.05 89.7865 204.49 89.532 204.017C89.2715 203.543 88.9283 203.179 88.5021 202.925C88.076 202.664 87.6114 202.534 87.1083 202.534H85.5014C85.5843 202.635 85.6612 202.806 85.7322 203.049C85.8033 203.286 85.8654 203.552 85.9187 203.848C85.9719 204.144 86.0193 204.437 86.0607 204.727C86.1022 205.017 86.1377 205.269 86.1673 205.482C86.2324 205.961 86.3389 206.39 86.4869 206.769C86.6348 207.148 86.842 207.447 87.1083 207.666C87.3687 207.885 87.7061 207.994 88.1204 207.994C88.7122 207.994 89.1591 207.778 89.4609 207.346C89.7628 206.914 89.9137 206.363 89.9137 205.695Z',
  ],
};

const Restaurant = () => {
  const { name } = useParams();

  return (
    <div className="content">
      <ImagesCarousel
        slides={[
          {
            imgPath: '/img/hero-bg/bg1.jpg',
            title: name ?? '',
            description: '',
          },
        ]}
      />
      <RestaurantDescription />
      <HallScheme hallLayout={testData} />
    </div>
  );
};

export default Restaurant;
