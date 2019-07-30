import React from 'react';
import Chart from 'chart.js';
import Wrapper from '../components/Common/block_wrapper';
import Title from '../components/Common/title';
import Contents from '../components/Common/contents';

interface Props {
    
}

interface State {

}

export default class Programming extends React.PureComponent<Props, State> {
    render() {
        return (
            <Wrapper id='programming'>
                <Title title='이런 재주가 있답니다' />
                <div className='chart-wrapper'>
                    <div style={{ flex: 2, width: '100%', height: '100%'}}>
                        <canvas id="radar-chart" width="100%" height='100%'></canvas>
                    </div>
                    <div style={{ flex: 3 }} className='info'>
                        <Contents contents={`
                             저의 주력 언어는 javascript(es6+)이며 react, react native를 다루는데 능숙합니다.
                            서버사이드에는 javascript의 런타임인 node.js(및 express)를 주력으로하여 MySQL/postgreSQL과 함께 사용하고있습니다. 필요할 경우, 빠르게 적극적이고 빠르게 학습하여 새로운 언어를 익히기도 합니다.
                            이전의 사례로는, Food Tech와 관련된 개인 프로젝트를 진행하는 중 php를 익혀야 하는 경우가 발생하여(Lalavel은 아님) 책을 옆에두고 구글링을 해가며 단기간내에 학습하며 프로젝트에 녹아 든 경험이 있습니다.
                            그리고 현재는 프리티어가 만료되었지만 지난해까지는(2018) aws의 프리티어를 활용하여 EC2, Lightsail, S3, RDS, ElasticIP 등을 활용한 경험이 있습니다. 주로, EC2위에 NGINX + Node.js를 조합하여 사용하였습니다.
                        `} />
                    </div>
                </div>
            </Wrapper>
        );
    }

    componentDidMount = () => {
        this._renderChart();
    }

    _renderChart = () => {
        const marksCanvas: any = document.getElementById('radar-chart');
        const ctx = marksCanvas.getContext('2d');

        const marksData = {
            labels: ["javascript(es6+)", "nodejs", "react.js", "react native", "aws", "mysql"],
            datasets: [{
                backgroundColor: [
                    'rgba(100,181,246, 0.9)',
                    'rgba(224,224,224, 0.9)',
                    'rgba(165,214,167, 0.9)',
                    'rgba(255,215,64, 0.9)',
                    'rgba(144,164,174, 0.9)',
                    'rgba(229,115,115, 0.9)',
                ],
                borderWidth: 0,
                fill: false,
                radius: 4,
                pointRadius: 4,
                pointBorderWidth: 2,
                pointBackgroundColor: "orange",
                pointHoverRadius: 5,
                data: [8, 6, 7, 7, 4, 4]
            }]
        };

        const chartOptions: object = {
            scale: {
                gridLines: {
                    color: "#616161",
                    lineWidth: 2
                },
                angleLines: {
                    display: false
                },
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 10,
                    stepSize: 2
                },
                pointLabels: {
                    fontSize: 15,
                    fontColor: "#616161"
                }
            },
            legend: {
                position: 'left'
            }
        };

        new Chart(ctx, {
            type: 'polarArea',
            data: marksData,
            options: chartOptions
        });
    }
}