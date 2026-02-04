import Accordion from './components/Accordion/Accordion.tsx'
import Card from './components/Card/Card.tsx'
import Modal from './components/Modal/Modal.tsx'
import './App.css'
import {useState} from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const toggleModal = () => setIsModalOpen(prev => !prev);

  return (
    <>
      <div id="outer_container">
        <div id="content">

          <div>
            <h1 style={{ color: 'var(--primary)'}}> Hello! </h1>

            <h2> Welcome to the demo page for Good CSS. </h2>

            <p> This demo page uses Good CSS as the base with additional styles applied on top of it. </p>
            <p> Good CSS is meant to provide a starting place when first building out a web application, and additional customization is highly encouraged. </p>
            <p> Toggle light and dark mode by typing this command into the Chrome browser bar: <code>chrome://settings/appearance</code>. </p>
          </div>

          {/* Flex */}

          <div>
            <h2>Flex</h2>

            <p>Items aligned in a row</p>
          </div>

          <div className="flexRowContainer">
            <div className="flexChild">Flex Row Child</div>
            <div className="flexChild">Flex Row Child</div>
            <div className="flexChild">Flex Row Child</div>
          </div>

          <div>
            <p>Items aligned in a column</p>
          </div>

          <div className="flexColumnContainer">
            <div className="flexChild">Flex Column Child</div>
            <div className="flexChild">Flex Column Child</div>
            <div className="flexChild">Flex Column Child</div>
          </div>

          {/* Grid */}

          <div>
            <h2>Grid</h2>
          </div>

          <div className="gridContainer">
            <div className="gridChild">Grid Child</div>
            <div className="gridChild">Grid Child</div>
            <div className="gridChild">Grid Child</div>
            <div className="gridChild">Grid Child</div>
          </div>

          {/* Other Containers */}

          <div>
            <h2>Other Containers</h2>
          </div>

          <div className="notification success">
            <p className="notification-text success">Success notification</p>
          </div>

          <div className="notification warning">
            <p className="notification-text warning">Warning notification</p>
          </div>

          <div className="notification error">
            <p className="notification-text error">Error notification</p>
          </div>

          {/* Custom Components */}

          <div>
            <h2> Custom Components </h2>
          </div>

          <div>
            <Accordion title={'Accordion'}>
              <h4> Welcome! </h4>

              <p> This is demo content for an accordion. </p>
            </Accordion>
          </div>

          <div>
            <Card title={'Card'}>
              <p> Hello! This is one Card component. </p>
            </Card>

            <Card title={'Card'}>
              <p> Hello! This is another Card component. </p>
            </Card>
          </div>

          <div>
            <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

            {isModalOpen && (
              <Modal setIsModalOpen={setIsModalOpen} />
            )}
          </div>

          {/* Header Hierarchy */}

          <div>
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
          </div>

          {/* Text */}

          <div>
            <h2>Text</h2>

            <p>This is your standard, generic paragraph text.</p>

            <p>
              This is a much longer paragraph. The purpose of this paragraph is to
              show what the text looks like when there's a lot of it, and what it
              looks like when it spans multiple lines. I'm running out of things to
              talk about so here's some random text. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Minima modi earum in dolorem totam! Minus
              quod, adipisci, at debitis iure rerum perferendis vitae impedit soluta
              distinctio natus voluptas molestiae ducimus laudantium? Illo excepturi
              blanditiis quasi perferendis cumque nostrum animi suscipit minus, corrupti
              modi doloremque rem. Nostrum accusantium repellat totam sapiente
              eius explicabo, consequatur cumque animi blanditiis repudiandae libero
              autem tenetur officia expedita, itaque porro quaerat quis voluptatum
              quisquam maiores quidem! Totam odio eos libero, nobis fugit repudiandae
              itaque non officiis sint unde vitae ipsum. Quod laborum ipsa optio ab
              doloribus ea, officia placeat voluptatibus dolor nemo velit facilis adipisci.
              Odio libero accusantium facere saepe enim velit nisi aspernatur quasi.
              Blanditiis odit repellat vitae debitis. Accusamus, similique! Unde saepe
              doloribus quae?
            </p>

            <p className="small">
              This is small paragraph text. It's a little bit smaller than the
              paragraph text above and it's in a muted color.
            </p>

            <p className="mini">
              This is mini paragraph text. It's a little bit smaller than the small
              paragraph text above and it's also in a muted color.
            </p>
          </div>

          <div>
            <h2>Special Text</h2>

            <p>
              If you want to navigate to your desktop in a Linux terminal, type in <code>cd ~/Desktop</code> and hit enter.
            </p>

            <pre style={{ whiteSpace: "pre-wrap" }}>// This is multi-line formatted code.
// Copy and paste the code below into your DevTools console.

const num = 14;
const otherNum = 45;
const otherOtherNum = num + otherNum;

console.log(otherOtherNum);</pre>

            <blockquote>This is text in a blockquote. How does it look?</blockquote>
          </div>

          {/* Lists */}

          <div>
            <h2>Lists</h2>

            <div>
              <ul>
                <li> Unordered list item </li>
                <li> Unordered list item </li>
                <li> Unordered list item </li>
              </ul>
            </div>

            <div>
              <ol>
                <li> Ordered list item </li>
                <li> Ordered list item </li>
                <li> Ordered list item </li>
              </ol>
            </div>

            <div>
              <ol>
                <li> Nested list item </li>
                <li> Nested list item
                  <ul>
                    <li> Unordered list item </li>
                    <li> Unordered list item </li>
                    <li> Unordered list item </li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <dl>
                <dt> Term </dt>
                <dd> Definition of the term. </dd>

                <dt> Term </dt>
                <dd> Definition of the term. </dd>
              </dl>
            </div>
          </div>

          {/* Links */}

          <div>
            <h2>Links</h2>

            <p><a href="#">This is a link within paragraph text.</a></p>

            <a href="#">This is a link outside of paragraph text.</a>
          </div>

          {/* Buttons */}

          <div>
            <h2>Buttons</h2>

            <button>Button</button>
            <button type="reset"> Reset </button>
            <button type="submit"> Submit </button>
          </div>

          {/* Forms and Input Types */}

          <div>
            <h2>Forms and Input Types</h2>

            <div>
              <input type="text" value="Text" />
            </div>

            <div>
              <input type="password" value="Password" />
            </div>

            <div>
              <textarea rows="10" cols="40"></textarea>
            </div>

            <div>
              <input type="checkbox" />
            </div>

            <div>
              <input type="radio" />
            </div>

            <div>
              <select>
                <option>California</option>
                <option>Colorado</option>
                <option>New York</option>
                <option>Texas</option>
              </select>
            </div>

            <div>
              <input type="number" value="100" />
            </div>

            <div>
              <input type="range" value="75" />
            </div>

            <div>
              <input type="search" value="Search" />
            </div>

            <div>
              <input type="button" value="Button" />
            </div>

            <div>
              <input type="reset" />
            </div>

            <div>
              <input type="submit" />
            </div>
          </div>

          <div>
            <form action="#" style={
              {
                margin: '0 auto',
                width: '600px'
              }
            }>
              <h2 className="title">Send Grant a Message</h2>

              <div>
                <label for="text">Name</label>
                <input type="text" />
              </div>

              <div>
                <label for="text">Email</label>
                <input type="email" />
              </div>

              <div>
                <textarea></textarea>
              </div>

              <div>
                <button type="reset"> Clear </button>
              </div>
            </form>
          </div>

          {/* Media */}

          <div>
            <h2>Media styles <span style={{ color: 'var(--primary)'}}>coming soon!</span></h2>
          </div>

          {/* Tables */}

          <div>
            <h2>Tables</h2>

            <table>
              <caption>
                Grant's Friends
              </caption>

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Marco</td>
                  <td>26</td>
                </tr>
                <tr>
                  <td>Polo</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>Grant</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>Joe</td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>Jerry</td>
                  <td>28</td>
                </tr>
                <tr>
                  <td>Siri</td>
                  <td>23</td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td colspan="2">This was a table made by Grant Davis.</td>
                </tr>
              </tfoot>
            </table>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
